import type {Equalizer, Fn2, Maybe} from '../types';

export function safeOperator<T extends number>(operation: Fn2<T>, fallback: T): Fn2<T, Maybe<T>> {
	return (a, b) => a === undefined && b === undefined
		? NaN as T
		: operation(a ?? fallback, b ?? fallback);
}

export const operatorLessThan: Equalizer<number> = (a, b) => a < b;
export const operatorLessThanOrEqual: Equalizer<number> = (a, b) => a <= b;
export const operatorGreaterThan: Equalizer<number> = (a, b) => a > b;
export const operatorGreaterThanOrEqual: Equalizer<number> = (a, b) => a >= b;
export const operatorEqual: Equalizer<unknown> = (a, b) => a === b;
export const operatorPlus: Fn2<number> = (a, b) => a + b;
export const operatorMinus: Fn2<number> = (a, b) => a - b;
export const operatorStar: Fn2<number> = (a, b) => a * b;
export const operatorSlash: Fn2<number> = (a, b) => a / b;
export const operatorPercent: Fn2<number> = (a, b) => ((a % b) + b) % b;
export const operatorAnd: Equalizer<boolean> = (a, b) => a && b;
export const operatorOr: Equalizer<boolean> = (a, b) => a || b;
export const operatorXor: Equalizer<boolean> = (a, b) => a !== b;
export const inverseOperatorMinus: Fn2<number> = (a, b) => b - a;
export const inverseOperatorSlash: Fn2<number> = (a, b) => b / a;
export const safeOperatorPlus = safeOperator(operatorPlus, 0);
export const safeOperatorMinus = safeOperator(operatorMinus, 0);
export const safeOperatorStar = safeOperator(operatorStar, 1);
export const safeOperatorSlash = safeOperator(operatorSlash, 1);
export const safeInverseOperatorMinus = safeOperator(inverseOperatorMinus, 0);
export const safeInverseOperatorSlash = safeOperator(inverseOperatorSlash, 1);
