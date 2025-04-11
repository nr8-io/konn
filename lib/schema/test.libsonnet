local k = import '../../main.libsonnet';
local t = import './main.libsonnet';

local schema = t.object(
  title='Bitwarden secrets',
  description='Creates a bitwarden external secret and a secret store for the vault',
  properties={
    secretStore: t.string('Secret store', 'The name of the secret store', default='bitwarden', required=true, minLength=1),
    organizationId: t.string('Organization ID', 'The organization id of the bitwarden vault', format='uuid'),
    projectId: t.string('The project id of the bitwarden vault', format='uuid'),
    createSecrets: t.bool('If empty Secret should be created with empty keys', default=true),
    createSecretStore: t.bool('If a secret store should be created', default=true, requires=['organizationId', 'projectId']),
    keys: t.array('The keys to be synced with bitwarden secrets', required=true),
    secrets: t.object('Secrets', 'Map of secrets to create', properties={
      forceSync: t.string('Add force sync annotation', default='1'),
      forcePushSync: t.string('Add force sync annotation to the push secret', default='1'),
      refreshInterval: t.string('Optional refresh interval for the external secret, default is 1m, nullable', default='1m'),
      pushRefreshInterval: t.string('Optional refresh interval for the push secret, default is null', default=null),
      createSecret: t.bool('Optional override for global createSecrets', default=null),
      keys: t.array('The keys to be synced with bitwarden secrets', items=t.string('key name', default='banana'), required=true),
    }),
  }
);

local feat = k.feature(
  configs=[
    {
      something: 'special',
    },
  ],
  schema=schema,
);

k.app(
  features=[
    feat,
  ],
)
