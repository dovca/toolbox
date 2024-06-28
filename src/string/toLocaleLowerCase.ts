import type {Fn, Many, Maybe} from '../types/utils';

export function toLocaleLowerCase(locales: Maybe<Many<string>>): Fn<string> {
	return (input) => input.toLocaleLowerCase(locales);
}
