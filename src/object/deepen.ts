import {assign} from './assign';
import {entries} from './entries';

export function deepen<T extends object>(obj: T, separator = '.'): object {
	return entries(obj).reduce((acc, [key, value]) => assign(key, value, separator)(acc), {});
}
