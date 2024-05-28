import {binaryOperation, unsafeBinaryOperation} from '../misc';
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
export const parity = modulo(2);
export const abs = Math.abs;
export const ceil = Math.ceil;
export const floor = Math.floor;
export const round = Math.round;
export const sign = Math.sign;
export const trunc = Math.trunc;
export const sqrt = Math.sqrt;
export const cbrt = Math.cbrt;
