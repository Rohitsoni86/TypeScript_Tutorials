// ===================== ⭐⭐ Enum ⭐⭐ ========================

// Enums are constants based data structures
// that store a set of named constants grouped around a central theme or intent.

// ⭐==> Enum is a feature in TypeScript that allows you to define a set of named constants..

// In TypeScript, Enums are a feature that injects runtime JavaScript objects to an application in addition to providing usual type-level extensions.

enum AccountType {
	PERSONAL = "Personal",
	STARTUP = "Startup",
	ENTERPRISE = "Enterprise",
	CUSTOM = "Custom",
}

// At compile time, TypeScript translates an enum to a corresponding IIFE which then introduces into runtime a JavaScript object representation of the enum.

// The AccountType enum we declared in the beginning compiles to the following JS code:

("use strict");
// var AccountType;
// (function (AccountType) {
// 	AccountType.PERSONAL = "Personal";
// 	AccountType["STARTUP"] = "Startup";
// 	AccountType["ENTERPRISE"] = "Enterprise";
// 	AccountType["CUSTOM"] = "Custom";
// })(AccountType || (AccountType = {}));
