// 📍 Null And Undefined And Unknown And Never And Any In Type Script

// ==>> ✨ Any In Typescript ====

// The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.

// Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type:

// ⭐==> Any is not a type in Typescript (It is include in the type definations) "It must be used only when Type checking is not considered"

function greetings(name) {
	console.log("My name is", name?.toUpperCase());
}

greetings("Rohit");
greetings(22); // For Uppercase it will give error

// These all function will work but when we are doing some manupulations inside a function then it can take or can be
// assigned any inbuild functions

// ============================>>✨ Null In Typescript  <<================================================================

// Null denotes a value that is either empty or does not exist. It's on purpose that there's nothing of worth here. TypeScript does not make variables null by default.

let data = null;

console.log("The exact value of data is: ", data);
console.log("data==data", data == data);
console.log("data==undefined", data == undefined);
console.log("data==false", data == false);
console.log("data == 0", data == 0);
console.log("data == on", data == 0n);
console.log('data==""', data == "");
console.log("data==NaN", data == NaN);

// The exact value of data is:  null
// data==data true
// data==undefined true
// data==false false
// data == 0 false
// data == on false
// data=="" false
// data==NaN false

// ============================>>✨ Undefined In Typescript  <<================================================================

var testVar;
console.log(testVar); //shows undefined
console.log(typeof testVar); //shows undefined

var testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object

// ============================>>✨ Never In Typescript  <<================================================================

// Never is used when we dont want to declare any explicit return specially for Functions.

// It is used when we try to run some function and stop the execution when something goes wrong

function checkSomething(): never {
	throw new Error("Something went wrong !!");
}

// checkSomething();

function throwError(message: string): never {
	throw new Error(message);
}

// throwError("Something went wrong!"); // The function never returns a value.

function infiniteLoop(): never {
	while (true) {
		console.log("This loop will never end.");
	}
}

// infiniteLoop(); // The function will never return

// dont confuse between void and never

// ============================>>✨ Void In Typescript  <<================================================================

// Use Void for all other functions if you are not returning any values there so be free to use Void only.

const onSearchSuccess = (data: any): void => {
	console.log("My User Data", data);
};

onSearchSuccess("Rohit Soni");
