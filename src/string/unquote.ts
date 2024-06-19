import type {Unquote} from '../types';

export function unquote<S extends string>(str: S): Unquote<S> {
	const match = str.match(/^(['"])(.*)\1$/);
	return (match ? match[2] : str) as Unquote<S>;
}
