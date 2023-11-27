export default function iterateThroughObject(reportWithIterator) {
  let allEmp = '';
  for (const [i, emp] of Object.entries(reportWithIterator)) {
    allEmp += `${emp}`;
    if (parseInt(i, 10) !== reportWithIterator.length - 1) {
      allEmp += ' | ';
    }
  }
  return allEmp;
}
