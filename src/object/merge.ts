import type {Override, StringKeys} from '../types';

/**
 * Merges the given values into the flowing values.
 * @param newValues
 * @returns Produces a new object.
 * @example
 * ```typescript
 * merge({a: 2, b: 2})({a: 1, c: 2}); // {a: 2, b: 2, c: 2}
 */
export function merge<New extends object>(newValues: New): <Old extends object>(oldValues: Old) => Override<Old, New> {
	return (oldValues) => ({ ...oldValues, ...newValues });
}

/**
 * Merges the given values into the flowing values using the given resolver function.
 * @param resolver A function to resolve conflicts between old and new values.
 * @returns Produces a new object.
 * @example
 * ```typescript
 * const mergeWithSum = mergeWith((key, oldVal, newVal) => oldVal + newVal);
 * mergeWithSum({a: 1, b: 2})({a: 3, b: 4}); // {a: 4, b: 6}
 * ```
 */
export function mergeWith<NewVal>(resolver: (key: string, oldVal: any, newVal: any) => NewVal):
	<New extends object>(newValues: New) =>
		<Old extends object>(oldValues: Old) =>
			Record<StringKeys<Old> | StringKeys<New>, NewVal>
{
	return (newValues) => (oldValues) => {
		const result: Record<string, any> = {...oldValues};
		for (const key in newValues) {
			result[key] = key in result
				? resolver(key, oldValues[key as unknown as keyof typeof oldValues], newValues[key])
				: newValues[key];
		}
		return result;
	};
}
