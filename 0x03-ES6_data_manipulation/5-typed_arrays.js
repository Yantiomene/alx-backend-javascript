export default function createInt8TypedArray(len, pos, val) {
  if (pos < 0 || pos >= len) {
    throw Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(len);
  const int8 = new Int8Array(arrayBuffer, 0, len);
  int8.set([val], pos);
  return new DataView(arrayBuffer);
}
