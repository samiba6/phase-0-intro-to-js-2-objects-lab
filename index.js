// Write your solution in this file!

// employees
// updateEmployeeWithKeyAndValue(employee, key, value)
//   1) "before each" hook for "returns an employee with the original key value pairs and the new key value pair"
// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
//   2) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
// deleteFromEmployeeByKey(employee, key)
//   3) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//   4) does not modify the original employee (it is non-destructive)
// destructivelyDeleteFromEmployeeByKey(employee, key)
//   5) returns employee without the deleted key/value pair
//   6) modifies the original employee
const employee ={
    name:"xd",
    streetAddress :"El eulma"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  const  newe={...employee, [key]:value};

     return newe;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    const  newe={...employee};
   delete newe[key];
    return newe;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}