export default function getStudentIdsSum(arr) {
  const sumIds = arr.reduce(
    (accumulator, val) => accumulator + val.id,
    0,
  );

  return sumIds;
}
