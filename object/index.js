// object
// let studentName = {
//     firtsName : "kanya",
//     lastName : "Jam",
//     age : 21,
//     course : "CSE"

// }

// // json
// {
//     "firtsName" : "kanya",
//     "lastName" : "Jam",
//     "age" : 21,
//     "course" : "CSE"

// }
// json to Object -> json.parse()
// object to json -> json.stignify()
// console.log(studentName)
// console.log(studentName.firtsName)
// console.log(studentName.lastName)
// console.log(studentName.firtsName  + " "+ studentName.lastName)
// studentName.age = 23
// console.log(studentName.age)
// created a Json
// const student = '{"Firstname":"kunal","Lastname" : "mul","age" : 21,"course" : "CSE"}'
// console.log(student)
// const obj = JSON.parse(student);// converted from json to object
// console.log(obj.Firstname)
//created object
const studentName = {
    firtsName : "kanya",
    lastName : "Jam",
    age : 21,
    course : "CSE"

}
const myjson = JSON.stringify(studentName);
console.log(myjson)
