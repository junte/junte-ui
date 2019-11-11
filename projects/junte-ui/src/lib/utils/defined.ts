export function defined(oldVal, newVal) {
  return newVal !== undefined ? newVal : oldVal;
}
