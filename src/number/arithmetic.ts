import type {Fn, Fn2, Maybe} from '../types';

export function binaryOperation<T extends number>(operation: Fn2<T>): (num?: Maybe<T>) => Fn<T> {
	return (b) => (a) => operation(a, b ?? a);
}

function unsafeBinaryOperation<T extends number>(operation: Fn2<T, Maybe<T>>): Fn<Fn<T, Maybe<T>>, Maybe<T>> {
	return (b) => (a) => operation(a, b);
}

function safeOperator<T extends number>(operation: Fn2<T>, fallback: T): Fn2<T, Maybe<T>> {
	return (a, b) => operation(a ?? fallback, b ?? fallback);
}

export const operatorPlus: Fn2<number> = (a, b) => a + b;
export const operatorMinus: Fn2<number> = (a, b) => a - b;
export const operatorStar: Fn2<number> = (a, b) => a * b;
export const operatorSlash: Fn2<number> = (a, b) => a / b;
export const operatorPercent: Fn2<number> = (a, b) => ((a % b) + b) % b;
export const inverseOperatorMinus: Fn2<number> = (a, b) => b - a;
export const inverseOperatorSlash: Fn2<number> = (a, b) => b / a;
export const safeOperatorPlus = safeOperator(operatorPlus, 0);
export const safeOperatorMinus = safeOperator(operatorMinus, 0);
export const safeOperatorStar = safeOperator(operatorStar, 1);
export const safeOperatorSlash = safeOperator(operatorSlash, 1);
export const safeInverseOperatorMinus = safeOperator(inverseOperatorMinus, 0);
export const safeInverseOperatorSlash = safeOperator(inverseOperatorSlash, 1);

export const add = binaryOperation(operatorPlus);
export const subtract = binaryOperation(operatorMinus);
export const subtractFrom = binaryOperation(inverseOperatorMinus);
export const multiply = binaryOperation(operatorStar);
export const divideBy = binaryOperation(operatorSlash);
export const divide = binaryOperation(inverseOperatorSlash);
export const modulo = binaryOperation(operatorPercent);
export const max = binaryOperation(Math.max);
export const min = binaryOperation(Math.min);
export const pow = binaryOperation(Math.pow);
export const hypot = binaryOperation(Math.hypot);

export const safeAdd = unsafeBinaryOperation(safeOperatorPlus);
export const safeSubtract = unsafeBinaryOperation(safeOperatorMinus);
export const safeSubtractFrom = unsafeBinaryOperation(safeInverseOperatorMinus);
export const safeMultiply = unsafeBinaryOperation(safeOperatorStar);
export const safeDivideBy = unsafeBinaryOperation(safeOperatorSlash);
export const safeDivide = unsafeBinaryOperation(safeInverseOperatorSlash);
export const safeMax = unsafeBinaryOperation(safeOperator(Math.max, -Infinity));
export const safeMin = unsafeBinaryOperation(safeOperator(Math.min, Infinity));

export const double = add();
export const increment = add(1);
export const decrement = subtract(1)
export const square = multiply();
export const negative = multiply(-1);
export const reciprocal = divide(1);
export const abs = Math.abs;
export const ceil = Math.ceil;
export const floor = Math.floor;
export const round = Math.round;
export const sign = Math.sign;
export const trunc = Math.trunc;
export const sqrt = Math.sqrt;
export const cbrt = Math.cbrt;
