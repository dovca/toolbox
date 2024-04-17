import type {Fn, Predicate, StringKeys, Values} from '../types';
import {isOneOf} from '../predicate';
import {entries} from './entries';

type PickForeign<
	Obj extends object,
	Keys extends string,
> = Pick<Obj, { [K in keyof Obj]: K extends Keys ? K : never; }[keyof Obj]>;

type OmitForeign<
	Obj extends object,
	Keys extends string,
> = Omit<Obj, { [K in keyof Obj]: K extends Keys ? K : never; }[keyof Obj]>;

type Picker<Keys extends string> = {
	<T extends object>(object: T): PickForeign<T, Keys>;
};

type Omitter<Keys extends string> = {
	<T extends object>(object: T): OmitForeign<T, Keys>;
};

function selector<T extends object, P>(picker: Predicate<[StringKeys<T>, Values<T>]>): Fn<Partial<T>, T> {
	return (object) => {
		const result: Partial<T> = {};
		for (const [key, value] of entries(object)) {
			if (picker([key, value])) {
				// @ts-ignore
				result[key] = object[key];
			}
		}
		return result;
	};
}

export function pickByKeys<T extends object>(picker: Predicate<StringKeys<T>>): Fn<Partial<T>, T> {
	return selector(([key]) => picker(key));
}

export function pickByValues<T extends object>(picker: Predicate<Values<T>>): Fn<Partial<T>, T> {
	return selector(([_, value]) => picker(value));
}

export function pick<K extends string[]>(...keys: K): Picker<K[number]> {
	return pickByKeys(isOneOf(...keys)) as any;
}

export function omitByKeys<T extends object>(picker: Predicate<StringKeys<T>>): Fn<Partial<T>, T> {
	return selector(([key]) => !picker(key));
}

export function omitByValues<T extends object>(picker: Predicate<Values<T>>): Fn<Partial<T>, T> {
	return selector(([_, value]) => !picker(value));
}

export function omit<K extends string[]>(...keys: K): Omitter<K[number]> {
	return omitByKeys(isOneOf(...keys)) as any;
}
