import {binaryOperation, identity} from '../misc';
import {negate} from '../function';
import {operatorAnd, operatorOr, operatorXor} from '../lang';

export const and = binaryOperation(operatorAnd);
export const or = binaryOperation(operatorOr);
export const xor = binaryOperation(operatorXor);
export const not = negate(identity);
