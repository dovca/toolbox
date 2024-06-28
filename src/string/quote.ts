import type {Quote} from '../types/string';
import {toString} from '../convert/toString';

export function quote<S extends string>(text: S): Quote<S> {
	return `"${toString(text)}"`;
}
