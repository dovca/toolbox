import type {Fn} from '../types/types';
import {forwardIterator} from './utils/iterators';

export function join<T>(glue = ''): Fn<ReadonlyArray<T>, string> {
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
