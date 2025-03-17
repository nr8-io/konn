// Conditional patch with default value
// default is an empty object
local onlyIf = function(test, patch, default={}) (
  if std.isBoolean(test) && test then (
    patch
  ) else (
    default
  )
);

// Conditional patch with default value,
// same as onlyIf but default is an empty array for convenience
local onlyIfArray = function(test, patch, default=[]) (
  onlyIf(test, patch, default)
);

// Uesd for importing string documents with templating and includes
// Automatically removes lines where props were null to keep formatting
local template = function(str, props={}) (
  local nullable = std.mapWithKey(
    function(key, prop) (
      if prop == null then '%(null)s' else prop
    ),
    props
  );

  // split into lines for filtering
  local lines = std.split(str % nullable, '\n');

  std.lines(
    std.filter(
      function(line) (
        std.length(std.findSubstr('%(null)s', line)) == 0
      ),
      lines
    )
  )
);

// Parse yaml from string with templating
// Passes flattened params to the template
local yaml = function(str, props={}, single=true, template=true) (
  local parsed = if template then std.parseYaml(str % props) else std.parseYaml(str);

  // normalize to array
  local documents = if std.isArray(parsed) then (
    parsed
  ) else (
    [parsed]
  );

  // allow returning single document
  if single && std.length(documents) == 1 then documents[0] else documents
);

local json = function(str, props={}, single=true, template=true) (
  local parsed = if template then std.parseJson(str % props) else std.parseJson(str);

  // normalize to array
  local documents = if std.isArray(parsed) then (
    parsed
  ) else (
    [parsed]
  );

  // allow returning single document
  if single && std.length(documents) == 1 then documents[0] else documents
);

{
  onlyIf:: onlyIf,
  onlyIfArray:: onlyIfArray,
  template:: template,
  yaml:: yaml,
  json:: json,
}
