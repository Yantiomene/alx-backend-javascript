
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentA: Student = {
    firstName: "Yan",
    lastName: "Tiomene",
    age: 20,
    location: "Yaounde",
}

const studentB: Student = {
    firstName: "Yaninthe",
    lastName: "Douanla",
    age: 30,
    location: "Douala",
}

const studentsList = [studentA, studentB];

document.addEventListener('DOMContentLoaded', () => {

	const table = document.getElementById('studentTable') as HTMLTableElement;

	studentsList.forEach((student) => {
		const row = table.insertRow();
		const firstNameCell = row.insertCell(0);
		const locationCell = row.insertCell(1);

		firstNameCell.innerHTML = student.firstName;
		locationCell.innerHTML = student.location;
	})
})

