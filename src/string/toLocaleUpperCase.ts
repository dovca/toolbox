import type {Fn, Many, Maybe} from '../types';

export function toLocaleUpperCase(locales: Maybe<Many<string>>): Fn<string> {
	return (input) => input.toLocaleUpperCase(locales);
}
