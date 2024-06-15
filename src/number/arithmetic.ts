import {type BinaryOperation, binaryOperation, type UnsafeBinaryOperation, unsafeBinaryOperation} from '../misc';
import {
	inverseOperatorMinus,
	inverseOperatorSlash,
	operatorMinus,
	operatorPercent,
	operatorPlus,
	operatorSlash,
	operatorStar,
	safeInverseOperatorMinus,
	safeInverseOperatorSlash, safeOperator,
	safeOperatorMinus,
	safeOperatorPlus,
	safeOperatorSlash,
	safeOperatorStar
} from '../lang';
import type {Fn} from '../types';

export const add: BinaryOperation = binaryOperation(operatorPlus);
export const subtract: BinaryOperation = binaryOperation(operatorMinus);
export const subtractFrom: BinaryOperation = binaryOperation(inverseOperatorMinus);
export const multiply: BinaryOperation = binaryOperation(operatorStar);
export const divideBy: BinaryOperation = binaryOperation(operatorSlash);
export const divide: BinaryOperation = binaryOperation(inverseOperatorSlash);
export const modulo: BinaryOperation = binaryOperation(operatorPercent);
export const max: BinaryOperation = binaryOperation(Math.max);
export const min: BinaryOperation = binaryOperation(Math.min);
export const pow: BinaryOperation = binaryOperation(Math.pow);
export const hypot: BinaryOperation = binaryOperation(Math.hypot);

export const safeAdd: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorPlus);
export const safeSubtract: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorMinus);
export const safeSubtractFrom: UnsafeBinaryOperation = unsafeBinaryOperation(safeInverseOperatorMinus);
export const safeMultiply: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorStar);
export const safeDivideBy: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperatorSlash);
export const safeDivide: UnsafeBinaryOperation = unsafeBinaryOperation(safeInverseOperatorSlash);
export const safeMax: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperator(Math.max, -Infinity));
export const safeMin: UnsafeBinaryOperation = unsafeBinaryOperation(safeOperator(Math.min, Infinity));

export const double: Fn<number> = add();
export const increment: Fn<number> = add(1);
export const decrement: Fn<number> = subtract(1)
export const square: Fn<number> = multiply();
export const negative: Fn<number> = multiply(-1);
export const reciprocal: Fn<number> = divide(1);
export const parity: Fn<number> = modulo(2);
export const abs: Fn<number> = Math.abs;
export const ceil: Fn<number> = Math.ceil;
export const floor: Fn<number> = Math.floor;
export const round: Fn<number> = Math.round;
export const sign: Fn<number> = Math.sign;
export const trunc: Fn<number> = Math.trunc;
export const sqrt: Fn<number> = Math.sqrt;
export const cbrt: Fn<number> = Math.cbrt;
