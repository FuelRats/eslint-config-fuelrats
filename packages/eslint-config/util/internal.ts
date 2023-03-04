/**
 * Creates a function that only passes the first argument to the given function
 *
 * @internal
 */
export const sArg = <T>(fn: (arg: T) => T) => {
  return (arg: T, ..._: any[]) => {
    return fn(arg)
  }
}
