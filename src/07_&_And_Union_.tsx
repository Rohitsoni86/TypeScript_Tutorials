// =============== ⭐⭐ & and Union in Typescript ⭐⭐ ===============

type cardNumber = {
	cardNumber: string;
};

type cardDates = {
	validTill: string;
};

type cardDetails = cardNumber &
	cardDates & {
		cardCVV: number;
	};

const myCardDetails: cardDetails = {
	cardNumber: "21312312",
	cardCVV: 1221,
	validTill: "123213",
};

// =========== ⭐⭐ Union in Typescript ⭐⭐ ==========

type Employee = {
	id: number;
	name: string;
};

type Employee2 = {
	id: number;
	name: string;
	empId: string;
	age: number;
};

const myEmployee: Employee | Employee2 = {
	id: 122,
	name: "Rohit",
	empId: "222",
};

const myEmployee2: Employee | Employee2 = {
	id: 1222,
	name: "Rohit Soni",
	empId: "211221",
	age: 22,
};

const getEmployeeId = (myEmployeeObjet: Employee2): number => {
	return myEmployeeObjet.id;
};

getEmployeeId(myEmployee); // throws error

getEmployeeId(myEmployee2);
