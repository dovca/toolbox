export type MockValue = {
	string?: string;
	number?: number;
	boolean?: boolean;
	array?: unknown[];
	object?: Record<string, unknown>;
	child?: {
		foo: any;
	};
};
