export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let getData = weakMap.get(endpoint) || 0;

  getData += 1;

  weakMap.set(endpoint, getData);

  if (getData >= 5) {
    throw Error('Endpoint load is high');
  }

  return getData;
}
