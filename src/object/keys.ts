export function keys<T extends object, K extends keyof T = keyof T>(obj: T): K[] {
	return Object.keys(obj) as K[];
}
