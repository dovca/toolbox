import type {IndexedPredicate, Predicate} from '../types';
import {forwardIterator} from './utils/iterators';

export function every<T>(predicate: IndexedPredicate<T>): Predicate<ReadonlyArray<T>> {
	  return (values) => {
		  for (const [value, index] of forwardIterator(values)) {
			  if (!predicate(value, index)) {
				  return false;
			  }
		  }
		  return true;
	  }
}
