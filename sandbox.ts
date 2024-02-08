import {flow} from './src/predicate/flow';
import {flatMap, join} from './src/array';
import {log} from './src/predicate/log';
import {concat} from './src/common/concat';

const result = flow(
	[10, 20, 30],
	concat([40, 50, 60]),
	flatMap((x) => [x, x + 1]),
	join(' '),
	concat('abc'),
	log,
);
