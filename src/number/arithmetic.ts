import type {Fn, Fn2} from '../types';

export function binaryOperation(operation: Fn2<number>): (num?: number) => Fn<number> {
	return (b) => (a) => operation(a, b ?? a);
}

export const add = binaryOperation((a, b) => a + b);
export const subtract = binaryOperation((a, b) => a - b);
export const subtractFrom = binaryOperation((a, b) => b - a);
export const multiply = binaryOperation((a, b) => a * b);
export const divideBy = binaryOperation((a, b) => a / b);
export const divide = binaryOperation((a, b) => b / a);
export const modulo = binaryOperation((a, b) => ((a % b) + b) % b);
export const max = binaryOperation(Math.max);
export const min = binaryOperation(Math.min);
export const pow = binaryOperation(Math.pow);
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
