export function tryCatch<R, E = unknown>(fn: () => R): [R, null] | [null, E] {
	try {
		return [fn(), null];
	} catch (e) {
		return [null, e as E];
	}
}

export async function asyncTryCatch<R, E = unknown>(fn: () => Promise<R>): Promise<[R, null] | [null, E]> {
	try {
		return [await fn(), null];
	} catch (e) {
		return [null, e as E];
	}
}
