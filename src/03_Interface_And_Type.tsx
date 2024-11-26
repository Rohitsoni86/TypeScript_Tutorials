// ===================== ⭐⭐ Interface ⭐⭐ ========================

// 📍 Interface:

// An interface in TypeScript is a way to define the shape of an object,
// specifying the properties and methods an object should have.
// It is primarily used to define the structure of classes, objects, and function signatures.

interface Person {
	id: number;
	name: string;
}

const myObject: Person = {
	id: 1,
	name: "Rohit",
};

// ===================== ⭐⭐ Type ⭐⭐ ========================

// 📍 Type Alias:
// A type alias is a way to give a type a name.
// A type alias can represent any valid type, such as primitives, unions,
// intersections, or more complex types like objects and functions.

type Person2 = {
	id: number;
	age: number;
};

const myOb: Person2 = {
	id: 33,
	age: 44,
};

// ===================== ⭐⭐ Type vs Interface ⭐⭐ ========================

interface myObject {
	id: number;
	name: string;
}

interface myObject {
	isEditable: boolean;
}

// We can do this adding new properties or new things in the same concept of usesage

type myTypeObject2 = {
	id: number;
	name: string;
};

// type myTypeObject2 = {
// 	isEditable: boolean;
// };

// But in type declaration of naming new contents we cannot use this "type"

// ⭐⭐ So Always Use Interfaces for object declartions

// 📍  Interfaces can be extended using extends, while type aliases cannot be extended directly (but they can be merged using intersections).

// 📍 Interfaces are usually used for object shapes, while type aliases can define more complex types, including unions and intersections.
