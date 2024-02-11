import type {Fn} from '../types';

export function join<T>(glue = ''): Fn<string, ReadonlyArray<T>> {
	  return (values) => values.join(glue);
}
