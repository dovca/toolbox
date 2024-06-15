# Toolbox

A set of general-purpose typescript functions for common tasks.

## Motivation

The main goal of this package is to remedy the pain of writing readable linear functional code in TypeScript.
This package was conceived as a workaround for these issues:

- Lodash's `chain()` breaks in production builds. (see [issue](https://github.com/lodash/lodash/issues/3298))
- TypeScript doesn't support the pipeline operator (yet). (see [issue](https://github.com/microsoft/TypeScript/issues/17718))

## One example for all

```typescript
import {
    add, flow, fromCharCode, grow, increment,
    join, log, map, multiply, toArray,
} from '@dovca/toolbox';

const result = flow(
  1,                 // 1
  add(12),           // 13
  multiply(5),       // 65
  toArray,           // [65]
  grow(increment),   // [65, 66]
  map(fromCharCode), // ['A', 'B']
  join(', '),        // 'A, B'
  log,               // -> console.log('A, B')
);

result; // 'A, B'
```

## Used nomenclature

- *flowing value* - the value that is being passed through the `flow` and `pipe` functions
- *to produce a value* - a function produces a value that then becomes the flowing value
- *predicate* - a unary function that "*passes*" when it returns `true` for a given value
