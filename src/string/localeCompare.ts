import type {Fn, Maybe, Many} from '../types';

export function localeCompare(locales: Maybe<Many<string>>, options?: Intl.CollatorOptions): Fn<Fn<number, string>, string> {
	return (other) => (input) => other.localeCompare(input, locales, options);
}
