export default function cleanSet(set, startString) {
  let newString = '';
  if (startString === undefined || startString.length === 0) return '';
  newString = [...set]
    .filter((elt) => (elt === undefined ? '' : elt.startsWith(startString)))
    .map((elt) => (elt === undefined ? '' : elt.replace(startString, '')))
    .join('-');
  return newString;
}
