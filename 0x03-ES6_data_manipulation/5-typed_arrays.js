export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const showData = new DataView(buffer);
  showData.setInt8(position, value);
  return showData;
}
