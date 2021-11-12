/* function calc(operator, num1, num2) {
    
    const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number');
    
    if (isNotValid) {
        return String('Error!');
    } else if (operator === 'sum') {
        return num1 + num2;
    } else if (operator === 'multi') {
        return num1 * num2;
    } else if (operator === 'dev') {
        return num1 / num2;
    } else if (operator === 'sub') {
        return num1 - num2;
    } else {
        return String('Unknown operator');
    }
}

console.log(calc('',5, 2)) */

/* for (i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
} */

/* let i = 0
  while (i < 3) {
    console.log(`number ${i}!`);  
    i++;
  } */

/*   do {
    i = prompt('Enter the number', 0)
  } while (i < 100);  */



/* const number = +prompt("Enter the number between 0 and 3", 0);

switch (number) {
  case 0:
    alert("You enter 0");
    break;
  case 1:
    alert("You enter 1");
    break;
  case 2:
  case 3:
    alert("You enter 2 or 3");
    break;
} */



/* let user = {
    name: 'John',
    age: 30
}
let key = prompt('Whay are you whant to know about user?','');
alert(user[key]); */



/* let fruit = 'apple';
let macen = {
    [fruit + 'Computers'] : 10
}
console.log(macen.appleComputers) */



let user = {
    name : 'John',
    age: 30
}

let clone = {};
// for (let key in user)
// clone[key] = user[key];

Object.assign(clone, user);

console.log(clone)