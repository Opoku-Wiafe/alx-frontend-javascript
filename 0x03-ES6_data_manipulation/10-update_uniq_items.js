export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [index, placeHold] of items) {
    if (placeHold === 1) {
      items.set(index, 100);
    }
  }
  return items;
}
