export default function getListStudentIds(arr) {
  let arrIds = [];
  if (!Array.isArray(arr)) return arrIds;

  arrIds = arr.map((x) => x.id);
  return arrIds;
}
