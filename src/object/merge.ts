import type {Override, StringKeys, Values} from '../types/utils';

/**
 * Merges the given values into the flowing values.
 * @param newValues New values that override the old ones.
 * @returns Produces a new object.
 * @example
 * ```typescript
 * merge({a: 2, b: 2})({a: 1, c: 2}); // {a: 2, b: 2, c: 2}
 * ```
 */
export function merge<New extends object>(newValues: New): <Old extends object>(oldValues: Old) => Override<Old, New> {
	return (oldValues) => ({...oldValues, ...newValues});
}

/**
 * Merges the flowing values into the given values.
 * @param oldValues Old values to be overridden by the new ones.
 * @returns Produces a new object.
 * @example
 * ```typescript
 * mergeInto({a: 1, c: 2})({a: 2, b: 2}); // {a: 2, b: 2, c: 2}
 * ```
 */
export function mergeInto<Old extends object>(oldValues: Old): <New extends object>(newValues: New) => Override<Old, New> {
	return (newValues) => merge(newValues)(oldValues);
}

/**
 * Merges the given values into the flowing values using the given resolver function.
 * @param resolver A function to resolve conflicts between old and new values. The resolver function is called
 * with the old flowing value, the new given value, and the key.
 * @returns Produces a new object.
 * @example
 * ```typescript
 * mergeWith(operatorMinus)({a: 2, b: 1})({a: 3, b: 4}); // {a: 1, b: 3}
 * ```
 */
export function mergeWith<NewVal>(resolver: (oldVal: any, newVal: any, key: string) => NewVal):
	<New extends object>(newValues: New) =>
		<Old extends object>(oldValues: Old) =>
			Record<StringKeys<Old> | StringKeys<New>, Values<Old> | Values<New> | NewVal> {
	return (newValues) => (oldValues) => {
		const result: Record<string, any> = {...oldValues};
		for (const key in newValues) {
			result[key] = key in result
				? resolver(oldValues[key as unknown as keyof typeof oldValues], newValues[key], key)
				: newValues[key];
		}
		return result;
	};
}

/**
 * Merges the flowing values into the given values using the given resolver function.
 * @param resolver A function to resolve conflicts between old and new values. The resolver function is called
 * with the old given value, the new flowing value, and the key.
 * @returns Produces a new object.
 * @example
 * ```typescript
 * mergeIntoWith(operatorMinus)({a: 2, b: 1})({a: 3, b: 4}); // {a: -1, b: -3}
 * ```
 */
export function mergeIntoWith<NewVal>(resolver: (oldVal: any, newVal: any, key: string) => NewVal):
	<Old extends object>(oldValues: Old) =>
		<New extends object>(newValues: New) =>
			Record<StringKeys<Old> | StringKeys<New>, Values<Old> | Values<New> | NewVal> {
	return (oldValues) => (newValues) => mergeWith(resolver)(newValues)(oldValues);
}
