export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) return [];

  const arrLoc = arr.filter((stud) => stud.location === city);

  return arrLoc;
}
