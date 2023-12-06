interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Allow any additional attribute with any name and type
}

interface Directors extends Teacher {
    numberOfReports: number;
}
  
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}
  
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
};
  
// Example usage:
const result = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe
