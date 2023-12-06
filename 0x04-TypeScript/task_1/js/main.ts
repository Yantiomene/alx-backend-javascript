interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Allow any additional attribute with any name and type
}

//const teacher3: Teacher = {
//    firstName: 'John',
//    fullTimeEmployee: false,
//    lastName: 'Doe',
//    location: 'London',
//    contract: false,
//  };
  
//  console.log(teacher3);
  