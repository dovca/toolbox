# TS-FNS

A set of abstract **T**ype**S**cript **F**u**N**ction**S** for common tasks.

## Motivation

The main goal of this package is to remedy the pain of writing readable linear functional code in TypeScript.
This package was conceived as a workaround for these issues:

- Lodash's `chain()` breaks in production builds. (see [issue](https://github.com/lodash/lodash/issues/3298))
- TypeScript doesn't support the pipeline operator (yet). (see [issue](https://github.com/microsoft/TypeScript/issues/17718))

## Installation

```bash
npm i @dovca/ts-fns
```

## One example for all

```typescript
import {
    add, arrayify, flow, fromCharCode, grow,
    increment, join, log, map, multiply
} from '@dovca/ts-fns';

const result = flow(
  1,                 // 1
  add(12),           // 13
  multiply(5),       // 65
  arrayify,          // [65]
  grow(increment),   // [65, 66]
  map(fromCharCode), // ['A', 'B']
  join(', '),        // 'A, B'
  log,               // -> console.log('A, B')
);

result; // 'A, B'
```

## Used nomenclature

- *flowing value* - the value that is being passed through the functions
- *to produce a value* - a function produces a value that then becomes the flowing value
- *predicate* - a unary function that "*passes*" when it returns `true` for a given value

## Functions

abs, add, all, and, any, append, arrayify, ascending, assign, at, backwardIterator, binaryOperation, bind, bindCurried, callWith, camelCase, cbrt, ceil, charAt, charCodeAt, chunk, chunkBy, chunkWith, circularIterator, command, compact, comparator, concat, constant, constantCase, count, countWith, curry, cut, decapitate, decrement, descending, difference, differenceWith, discard, divide, divideBy, double, dropRightUntil, dropRightWhile, dropUntil, dropUntilReversed, dropWhile, dropWhileReversed, endsWith, entries, equalizeWith, every, fallback, fill, filter, find, findIndex, findIndexReversed, findKey, findLast, findLastIndex, findReversed, first, firstLoose, flat, flatMap, floor, flow, forEach, forEachReversed, forwardIterator, fromCharCode, fromPairs, funnel, gather, groupBy, groupWith, grow, growWhile, head, hypot, identity, includes, increment, indexOf, infiniteIterator, intersection, intersectionWith, inverseOperatorMinus, inverseOperatorSlash, isArray, isEqual, isEven, isFalsy, isFinite, isGreaterThan, isGreaterThanOrEqual, isInteger, isLessThan, isLessThanOrEqual, isNegative, isNonNegative, isNonPositive, isNotEqual, isNotNullish, isNotOneOf, isNullish, isNumber, isObject, isOdd, isOneOf, isPositive, isString, isTruthy, isValidIndex, isZero, join, kebabCase, keep, keyBy, keys, last, lastIndexOf, lastLoose, length, localeCompare, log, lowerCase, map, mapEntries, mapKeys, mapValues, mapWithPrevInput, mapWithPrevOutput, match, max, memoize, min, modulo, multiply, negate, negative, neighbors, noop, not, omit, operatorAnd, operatorGreaterThan, operatorGreaterThanOrEqual, operatorLessThan, operatorLessThanOrEqual, operatorMinus, operatorOr, operatorPercent, operatorPlus, operatorSlash, operatorStar, operatorXor, or, parity, partition, pascalCase, pick, pickBy, pickValues, pipe, pop, pow, prepend, product, property, push, reciprocal, reduce, reduceAtMost, reduceReversed, reduceRight, remove, repeat, replace, reverse, reversedIterator, round, safeAdd, safeDivide, safeDivideBy, safeInverseOperatorMinus, safeInverseOperatorSlash, safeMax, safeMin, safeMultiply, safeOperatorMinus, safeOperatorPlus, safeOperatorSlash, safeOperatorStar, safeSubtract, safeSubtractFrom, sameValueZero, search, seq, shift, shuffle, sign, slice, snakeCase, some, sort, split, spread, sqrt, square, startsWith, substring, subtract, subtractFrom, sum, tail, takeRightUntil, takeRightWhile, takeUntil, takeUntilReversed, takeWhile, takeWhileReversed, toLocaleLowerCase, toLocaleUpperCase, toRegex, toString, trim, trimEnd, trimStart, trunc, unary, uncurry, union, unionWith, unique, unshift, unwrap, upperCase, values, wrap, xor, zip, zipWith
