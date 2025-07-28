import type {Indexable, ValidKey} from '../types/utils';

type PropertyExtractor<Prop extends ValidKey> = <Obj extends { [P in Prop]: any }>(object: Obj) => Obj[Prop];

type PropertyOfExtractor<Obj extends Indexable> = <Prop extends keyof Obj>(property: Prop) => Obj[Prop];

/**
 * Gets the value of a flowing object's property. A single-depth version of `access`.
 * @param prop The property to get the value of.
 * @returns Produces the value of the given property.
 * @example
 * ```typescript
 * property('a')({a: 1, b: 2}); // 1
 * ```
 */
export function property<Prop extends ValidKey>(prop: Prop): PropertyExtractor<Prop> {
	return (obj) => obj[prop];
}

export function propertyOf<Obj extends Indexable>(obj: Obj): PropertyOfExtractor<Obj> {
	return (prop) => obj[prop];
}
