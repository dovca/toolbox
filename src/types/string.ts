import type {ToString} from './convert';

export type Quote<S> = `"${ToString<S>}"`;

export type Unquote<S extends string> = S extends `"${infer U}"` ? U : S extends `'${infer U}'` ? U : S;
