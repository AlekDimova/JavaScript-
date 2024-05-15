function solve(employeeNames) {
    const employees = {}; //define structure (assosiative array)

    for (const name of employeeNames) {
        employees[name] = name.length
    } //read employee names

    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    } //print result
}

//tova e po-dobro resenie v realna praktika
function fancierSolve(employeeNames) {
    const employees = [];

    for (const name of employeeNames) {
        const employee = {
            name,
            personalNumber: name.length,
        }; //syzdavame si obekt 

        employees.push(employee); //dobavame obekta(employee) v masiva (employees)
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    } //go printirame
}

function fanciestSolve(employeeNames) {
    employeeNames
        .map(name => ({ name, personalNumber: name.length }))  
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))

        //vhy stringovete(employeeNames) iskam da mi mapnes vseki string kum employee object 
}

fanciestSolve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])