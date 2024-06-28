import type {Arrayifier} from '../types/utils';

type SplitOnce<Str extends string, Sep extends string> = Str extends `${infer First}${Sep}${infer Rest}`
	? [First, Rest]
	: [Str, string];

type OnceSplitter<Sep extends string> = <Str extends string>(input: Str) => SplitOnce<Str, Sep>;

export function split(separator: string | RegExp, limit?: number): Arrayifier<string> {
	return (input) => input.split(separator, limit);
}

export function splitOnce<Sep extends string>(separator: Sep): OnceSplitter<Sep> {
	return (input) => {
		const index = input.indexOf(separator, separator === '' ? 1 : 0);
		return (
			index === -1
				? [input, '']
				: [input.slice(0, index), input.slice(index + separator.length)]
		) as SplitOnce<typeof input, Sep>;
	};
}
