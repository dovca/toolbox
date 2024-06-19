import {toString} from '../convert';
import type {Quote} from '../types';

export function quote<S extends string>(text: S): Quote<S> {
	return `"${toString(text)}"`;
}
