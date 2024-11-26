// ===================== ⭐⭐ Type Narrowing ⭐⭐ ========================


Type narrowing is the process ===> TypeScript automatically refines the type of a variable within a specific block of code. 

This occurs based on conditions such as typeof or instanceof checks.


function printLength(input: string | string[] | number): void {
  if (typeof input === 'string') {
    console.log(input.length);  // TypeScript narrows down input to string
  } else if (Array.isArray(input)) {
    console.log(input.length);  // input is narrowed to string[]
  } else {
    console.log(input.toString());  // input is narrowed to number
  }
}


