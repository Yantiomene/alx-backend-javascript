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
  
// Example usage:
//const director1: Directors = {
//    firstName: 'John',
//    lastName: 'Doe',
//    location: 'London',
//    fullTimeEmployee: true,
//    numberOfReports: 17,
//};
//console.log(director1);
  
  
  