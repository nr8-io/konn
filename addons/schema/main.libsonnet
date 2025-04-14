local array = import './lib/array.libsonnet';
local boolean = import './lib/boolean.libsonnet';
local number = import './lib/number.libsonnet';
local object = import './lib/object.libsonnet';
local ref = import './lib/ref.libsonnet';
local schema = import './lib/schema.libsonnet';
local string = import './lib/string.libsonnet';

{
  array: array,
  arr: array,
  boolean: boolean,
  bool: boolean,
  number: number,
  num: number,
  object: object,
  obj: object,
  schema: schema,
  string: string,
  str: string,
  ref: ref,
}
