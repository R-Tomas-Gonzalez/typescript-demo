// Basic Types
let id: number = 5;

let company: string = 'r.tomasgonzalez';

let isPublished: boolean = true;

let x: any = 'hello';

let age: number;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "hello"];

//tuple
let person: [number, string, boolean] = [1, 'tomas', false];

// tuple array
let employee: [number, string][];

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
]

// union
let pid: string | number = 22;

pid = '22';

// enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// objects

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

// interfaces
interface UserInterface {
    readonly id: number // <-- readonly option
    name: string
    age?: number // <-- optional value
}

const user1:UserInterface = {
    id: 1,
    name: 'John'
}

// user1.id = 1; // <-- creates an error because id is readonly

interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// type assertion
let cid: any = 1;
// let customerId = <number>cid;
// or
let customerID = cid as number;

// functions
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message);
}

// classes
class Person {
    id: number // <-- can change these to private, public, protected
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;        
    }

    register() {
        return `${this.name} is now registered`;
    }

}

const brad = new Person(21, "Tomas");
console.log(brad, brad.register());


// using an interface with your class
interface NewUserInterface {
    id: number
    name: string
    register(): string
}

class NewUser implements NewUserInterface {
    id: number // <-- can change these to private, public, protected
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;        
    }

    register() {
        return `${this.name} is now registered`;
    }
}

// subclass
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, "TJ", "engineer");

console.log(emp.name, emp.id, emp.position, emp.register());

// generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

strArray.push('hello')