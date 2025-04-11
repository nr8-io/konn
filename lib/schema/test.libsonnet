local k = import './main.libsonnet';

local organizationId = k.string(
  title='Organization ID',
  description='The organization id of the bitwarden vault',
  format='uuid',
);

local schema = k.object(
  title='Bitwarden secrets',
  description='Creates a bitwarden external secret and a secret store for the vault',
  properties={
    secretStore: k.string('Secret store', 'The name of the secret store', default='bitwarden', required=true, minLength=1),
    organizationId: organizationId,
    projectId: k.string('The project id of the bitwarden vault', format='uuid'),
    createSecrets: k.bool('If empty Secret should be created with empty keys', default=true),
    createSecretStore: k.bool('If a secret store should be created', default=true, requires=['organizationId', 'projectId']),
    keys: k.array('The keys to be synced with bitwarden secrets', required=true),
    secrets: k.object('Secrets', 'Map of secrets to create', properties={
      forceSync: k.string('Add force sync annotation', default='1'),
      forcePushSync: k.string('Add force sync annotation to the push secret', default='1'),
      refreshInterval: k.string('Optional refresh interval for the external secret, default is 1m, nullable', default='1m'),
      pushRefreshInterval: k.string('Optional refresh interval for the push secret, default is null', default=null),
      createSecret: k.bool('Optional override for global createSecrets', default=null),
      keys: k.array('The keys to be synced with bitwarden secrets', items=k.string('key name', default='banana'), required=true),
    }),
  }
);

schema.defaults()
