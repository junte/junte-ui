export function isEqual(obj: any, obj2: any) {
  return JSON.stringify(obj) === JSON.stringify(obj2);
}
