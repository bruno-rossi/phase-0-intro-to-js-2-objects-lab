// Write your solution in this file!

const employee = {
        name: "Andrew",
        streetAddress: "299 Adelphi"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee, "name", "Sam",
    employee, "streetAddress", "11 Broadway"
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = Object.assign({}, employee)
    delete newEmployee.name;
    return newEmployee;
}

deleteFromEmployeeByKey(newEmployee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, "name");