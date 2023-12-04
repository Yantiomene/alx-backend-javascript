/* eslint-disable-next-line no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studArr, city, newGrades) {
  return studArr
    .filter((stud) => stud.location === city)
    .map((stud) => {
      newGrades.map((obj) => {
        if (obj.studentId === stud.id) {
          stud.grade = obj.grade;
        }

        if (!stud.hasOwnProperty('grade')) {
          stud.grade = 'N/A';
        }

        return stud;
      });

      return stud;
    });
}
