// ✨ Type annotation in TypeScript

// Type annotation in TypeScript involves explicitly specifying the data type of variables, function parameters, and return values. This annotation enhances code clarity and enables TypeScript's static type checking to catch errors during compilation. This improves code quality and maintainability.

// ⭐⭐ type annotations are written using a colon (:) followed by the desired type.

// ⭐⭐ Types in Typescript

// 📍 Number
// 📍 String
// 📍 Enum
// 📍 Tuple
// 📍 Array
// 📍 Boolean
// 📍 ANY
// 📍 UNKNOWN
// 📍 NAVER

// ===================== ⭐⭐ JAVASCRIPT ⭐⭐ ========================

let myNumber = 33;
let myString = "Rohit Soni";
let myNumberArray = [1, 2, 3, 4, 5, 6];
let myStringArray = ["1", "33"];

// JavaScript does not have built-in support for enums, but we can use objects or constants.
const Direction22 = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,
};
let direction22 = Direction22.Up;
console.log("direction:", direction22); // Output: direction: 0

// =====================⭐⭐ Type-SCRIPT ⭐⭐ ========================

let myNumber2: number = 33;
let myString2: string = "Rohit Soni";
let myNumberArray2: number[] = [1, 2, 3, 4, 5, 6];
let myStringArray2: string[] = ["1", "33"];

enum Direction {
	Up,
	Down,
	Left,
	Right,
}
let direction: Direction = Direction.Up;
console.log("direction:", direction); // Output: direction: 0

// Parameter Type Annotations

// Parameter type annotation
function greet(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}

// Return Type Annotations

function getFavoriteNumber(): number {
	return 26;
}

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// =====================⭐⭐ Type-SCRIPT : Union Types ⭐⭐ ========================

function printId(id: number | string) {
	console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 }); // Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

// Type Aliases

// This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

type Point = {
	x: number;
	y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

// =====================⭐⭐ Interfaces vs Type In a File ⭐⭐ ========================

interface myObject {
	id: number;
	name: string;
}

interface myObject {
	isEditable: boolean;
}

// We can do this adding new properties or new things in the same concept of usesage

type myTypeObject = {
	id: number;
	name: string;
};

// type myTypeObject = {
// 	isEditable: boolean;
// };

// But in type declaration of naming new contents we cannot use this "type"

// ⭐⭐ So Always Use Interfaces for object declartions
