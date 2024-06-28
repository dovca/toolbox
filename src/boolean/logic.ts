import {type BinaryOperation, binaryOperation} from '../misc/binaryOperation';
import {identity} from '../misc/identity';
import {negate} from '../function/negate';
import {operatorAnd, operatorOr, operatorXor} from '../lang/operators';
import type {Fn} from '../types/utils';

export const and: BinaryOperation<boolean> = binaryOperation(operatorAnd);
export const or: BinaryOperation<boolean> = binaryOperation(operatorOr);
export const xor: BinaryOperation<boolean> = binaryOperation(operatorXor);
export const not: Fn<boolean> = negate(identity);
