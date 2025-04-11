local t = import './main.libsonnet';

t.obj(
  // defaults
  title='A test object',
  description='A test object',
  examples=['example1', 'example2'],
  properties={
    foo: t.str(
      title='Foo',
      description='A string property',
      default='foo',
      examples=['example1', 'example2'],
      deprecated=false,
    ),
    bar: t.num(
      title='Bar',
      description='A number property',
      default=42,
      required=true,
      examples=[42, 43],
      requires=['foo'],
    ),
  },
)
