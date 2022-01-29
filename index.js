

function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(employees) {
    let employeeRecords = []
    for (let i = 0; i < employees.length; i++) {
        let record = createEmployeeRecord(employees[i])
        employeeRecords.push(record)
    }
   
    // employees.forEach((employee) => {
    //     let record = createEmployeeRecord(employee)
    //     employeeRecords.push(record)
    // })
    return employeeRecords;

}