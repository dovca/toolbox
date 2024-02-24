import type {First, WithoutFirst} from '../types';
import {headAndRest} from '../array';

export class MultiMap<K extends any[], V> {
	#map: Map<First<K>, MultiMap<WithoutFirst<K>, V>>;
	#rootValue: V | undefined = undefined;

	constructor() {
		this.#map = new Map();
	}

	set(keys: K, value: V) {
		if (keys.length > 0) {
			const [currentKey, nextKeys] = headAndRest(keys);
			const current = this.#map.get(currentKey);
			if (current) {
				current.set(nextKeys, value);
			} else {
				const next = new MultiMap<WithoutFirst<K>, V>();
				next.set(nextKeys, value);
				this.#map.set(currentKey, next);
			}
		} else {
			this.#rootValue = value;
		}

		return this;
	}

	get(keys: K): V | undefined {
		if (keys.length > 0) {
			const [currentKey, nextKeys] = headAndRest(keys);
			const current = this.#map.get(currentKey);
			return current?.get(nextKeys);
		}

		return this.#rootValue;
	}

	has(keys: K): boolean {
		if (keys.length > 0) {
			const [currentKey, nextKeys] = headAndRest(keys);
			const current = this.#map.get(currentKey);
			return current?.has(nextKeys) ?? false;
		}

		return this.#rootValue !== undefined;
	}

	delete(keys: K): boolean {
		if (keys.length > 0) {
			const [currentKey, nextKeys] = headAndRest(keys);
			const current = this.#map.get(currentKey);
			return current?.delete(nextKeys) ?? false;
		}

		const deleted = this.#rootValue !== undefined;
		this.#rootValue = undefined;
		return deleted;
	}

	clear() {
		this.#map.clear();
		this.#rootValue = undefined;
	}
}
