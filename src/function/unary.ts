/**
 * Caps the number of arguments to the function to one. All other arguments are ignored.
 */
export function unary<T, R>(fn: (arg: T, ...rest: any[]) => R): (arg: T, ...rest: any[]) => R {
  return (arg) => fn(arg);
}
