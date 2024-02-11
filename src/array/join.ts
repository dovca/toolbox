import type {Fn} from '../types';
import {forwardIterator} from './utils/iterators';

export function join<T>(glue = ''): Fn<string, ReadonlyArray<T>> {
	  return (values) => {
		  let result = '';
		  for (const [value, index] of forwardIterator(values)) {
			  if (index) {
				  result += glue;
			  }
			  result += value;
		  }
		  return result;
	  };
}
