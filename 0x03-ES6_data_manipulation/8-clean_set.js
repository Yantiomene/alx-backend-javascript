export default function cleanSet(set, startString) {
  let newString = '';
  if (startString === undefined || startString.length === 0) return '';
  newString = [...set]
    .filter((elt) => elt.startsWith(startString))
    .map((elt) => elt.replace(startString, ''))
    .join('-');
  return newString;
}
