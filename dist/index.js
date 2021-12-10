"use strict";
// Basic Types
let id = 5;
let company = 'r.tomasgonzalez';
let isPublished = true;
let x = 'hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//tuple
let person = [1, 'tomas', false];
// tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
// union
let pid = 22;
pid = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// type assertion
let cid = 1;
// let customerId = <number>cid;
// or
let customerID = cid;
// functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(21, "Tomas");
console.log(brad, brad.register());
class NewUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "TJ", "engineer");
console.log(emp.name, emp.id, emp.position, emp.register());
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
strArray.push('hello');
