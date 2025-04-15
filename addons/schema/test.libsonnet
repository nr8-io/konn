local t = import './main.libsonnet';
local k = import 'konn/main.libsonnet';

local bwSchema = t.schema(
  id='bitwarden-secrets',
  title='Bitwarden secrets',
  description='Creates a bitwarden external secret and a secret store for the vault',
  properties={
    secretStore: t.string('Secret store', 'The name of the secret store', default='bitwarden', required=true, minLength=1),
    organizationId: t.string('Organization ID', 'The organization id of the bitwarden vault', format='uuid'),
    projectId: t.string('The project id of the bitwarden vault', format='uuid'),
    createSecrets: t.bool('If empty Secret should be created with empty keys', default=true),
    createSecretStore: t.bool('If a secret store should be created', default=true, requires=['organizationId', 'projectId']),
    secrets: t.object('Secrets', 'Map of secrets to create', properties={
      forceSync: t.string('Add force sync annotation', default='1'),
      forcePushSync: t.string('Add force sync annotation to the push secret', default='1'),
      refreshInterval: t.string('Optional refresh interval for the external secret, default is 1m, nullable', default='1m'),
      pushRefreshInterval: t.string('Optional refresh interval for the push secret, default is null'),
      createSecret: t.bool('Optional override for global createSecrets'),
      createPushSecret: t.bool('If a push secret should be created for this secret', default=true),
      keys: t.array('The keys to be synced with bitwarden secrets', items=t.string('key name'), required=true),
    }),
  }
);

local bwFeat = k.feature(
  [
    bwSchema,
  ],
);

// local appSchema = t.schema(
//   id='app',
//   properties={
//     extensions: t.object('Extensions', 'Map of extensions to apply', properties={
//       schema: t.bool('Enable schema extension', default=false),
//     }),
//     bitwardenSecrets: t.ref('bitwarden-secrets'),
//   }
// );

local app = k.app(
  [
    function(ctx, props) (import 'konn-topvine/namespace/main.libsonnet').configure({
      namespace: 'testing',
    }),

    function(ctx, props) t.generateJsonSchema.apply({
      generate: props.generateSchema,
    }),

    {
      banana: true,
    },

    bwFeat,
  ],
  {
    generateSchema: false,
  }
);

app.init({ generateSchema: false })
