// ===================== ⭐⭐ Type Assertion ⭐⭐ ========================

// A type assertion in TypeScript is a way to tell the
// compiler to treat a variable as a certain type,overriding the inferred type.
// It is similar to type casting in other languages but without any actual conversion of data.
// It provides a way to inform the compiler about the type of a value when you have more information than TypeScript can infer on its own.

let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// let someValue2: any = "Hello, TypeScript!";
// let strLength2: number = (<string>someValue2).length;

interface User {
	name: string;
	age: number;
}

let data2: any = { name: "Alice", age: 30 };

// Use type assertion to specify that 'data' is of type 'User'
let user = data2 as User;
console.log(user.name); // "Alice"
console.log(user.age); // 30

let userNumber = data2 as number;

userNumber = 44;

console.log("User Number", userNumber);
