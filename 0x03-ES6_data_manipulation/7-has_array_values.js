export default function hasValuesFromArray(set, array) {
  for (const elt of array.values()) {
    if (!set.has(elt)) return false;
  }
  return true;
}
