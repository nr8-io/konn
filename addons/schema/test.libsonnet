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

local bwFeat = k.feature([
  bwSchema,
]);

local ext = k.extension(
  function(ctx, target, props) (
    // filter out json schemas
    if k.is(target, 'JsonSchema') then (
      if props.enabled && k.is(target, 'JsonSchema', props.schema.metadata.name) then (
        target
      ) else (
        null
      )
    ) else if !props.enabled then (
      target  // filter out regular configs
    ) else (
      null
    )
  ),
  {
    enabled: false,
  }
);

local schemaMan = k.manifest(
  [
    function(ctx, props) {
      props: props,

    },
    k.config(function(ctx, props) {
      props: props,
    }, {
      config: true,
    }),
  ],
  {
    // schema: t.schema('root'),
    enabled: false,
    man: true,
  },
  // extensions=[
  //   function(ctx, props) ext.apply({
  //     schema: props.schema,
  //     enabled: props.enabled,
  //   }),
  // ]
);


local appSchema = t.schema(
  id='app',
  properties={
    extensions: t.object('Extensions', 'Map of extensions to apply', properties={
      schema: t.bool('Enable schema extension', default=false),
    }),
    bitwardenSecrets: t.ref('bitwarden-secrets'),
  }
);


local schemaFeat = k.feature([
  schemaMan,
], {
  enabled: false,
  feat: true,
});


k.app(
  [
    schemaFeat,
    {},
  ],
  {
    app: true,
    enabled: true,
  }
).init()
