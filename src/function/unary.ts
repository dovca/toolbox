export function unary<T, R>(fn: (arg: T, ...rest: any) => R): (arg: T, ...rest: any) => R {
  return (arg) => fn(arg);
}
