import type {Override} from '../types';



export function assign<N extends object>(newValues: N): <O extends object>(oldValues: O) => Override<O, N> {
	return (oldValues) => ({ ...oldValues, ...newValues });
}
