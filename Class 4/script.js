// let a = 123
// console.log(typeof a)
// let b= "123"
// let ab = Number(b)
// console.log(typeof ab)
// console.log(ab)
// let abc = "123abc"
// let number = Number(abc)
// console.log(number)

let array = [1, 2, 4, 4, 5]
for (let i = 0; i < array.length; i++) {
    let firstNumber = array[i]
    for (let a = ++i; a < array.length; a++) {
        if (firstNumber + array[a] == 8) {
            console.log(firstNumber, array[a])
        }
    }
}

const a = {
    name: 'ihtasham'
}
const b = {
    class: 10
}
Object.setPrototypeOf(a, b)
console.log(a.class)
function createUser(username) {
    this.username
}
function users(classes, rollno) {
    this.class = classes
    this.rollno = rollno
}
const shami = users('10', 20)
console.log(shami)
