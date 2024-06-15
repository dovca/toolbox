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
export const safeOperatorPlus: Fn2<number, Maybe<number>> = safeOperator(operatorPlus, 0);
export const safeOperatorMinus: Fn2<number, Maybe<number>> = safeOperator(operatorMinus, 0);
export const safeOperatorStar: Fn2<number, Maybe<number>> = safeOperator(operatorStar, 1);
export const safeOperatorSlash: Fn2<number, Maybe<number>> = safeOperator(operatorSlash, 1);
export const safeInverseOperatorMinus: Fn2<number, Maybe<number>> = safeOperator(inverseOperatorMinus, 0);
export const safeInverseOperatorSlash: Fn2<number, Maybe<number>> = safeOperator(inverseOperatorSlash, 1);
