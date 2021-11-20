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



/* let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Peter';
delete user.name;
console.log(user); */



/* let schedule = {
// '8:30': 'get up'
};

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}
console.log(isEmpty(schedule)) */



/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

sumSal(salaries);

function sumSal(obj) {
    for (key in obj) {
        sum += obj[key];
    }
}

alert(sum); */



/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(menu); */



/* let user = {
    name: 'John',
    age: 30
}
let a = prompt('What you whant to know about user','')
alert(user[a]); */



/* let fruit = 'apple';
let obj = {
    [fruit + 'Computers']: 3
} 
console.log(obj); */



/* let user = {
    name: 'John',
    age: 30,
    height: 178,
    weight: 70
}

let clone = {};
for (key in user) {
    clone[key] = user[key];
}

console.log(clone);
 */



/* let obj, method;

obj = {
    go: function() { console.log(this); }
};

// console.log(obj.go());
obj.go();
(obj.go)();
(method = obj.go)();
(obj.go || obj.stop)(); */



/* var car1 = {
    name: 'ZAZ',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 120
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 10; 
    }
};

alert(car1.isTurnOn);
car1.start();
alert(car1.isTurnOn); */



/* function makeUser() {
    return {
        name: 'John',
        ref() {
            return this; 
        }
    };
};

let user = makeUser();

alert(user.ref().name); */



/* const calculator = {
    read() {
        this.num1 = +prompt('Give number 1','');
        this.num2 = +prompt('Give number 2','');
    },
    sum () {
        alert(this.num1 + this.num2);
    },
    mult () {
        alert(this.num1 * this.num2);
    }
}

calculator.read();
calculator.sum();
calculator.mult(); */



/* let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { 
      console.log( this.step );
      return this;
    }
  };

ladder.up().up().down().showStep().up().showStep(); */



/* let str = 'Widget with id';
let target = 'i';
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
} */



/* function ucFirst(str) {
    if (!str) return str;
    return (str[0].toUpperCase() + str.slice(1));
}
console.log(ucFirst('vagina')); */



/* function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    } else {
        return str;
    }
}
console.log(truncate('Pipiter is the most beautiful body part', 20)) */



/* function checkSpam(str) {
    if (str.includes('viagra') || str.includes('XXX')) {
        return true;
    } else if {
        
    } else {
        return false;
    }
}
console.log(checkSpam('buy viagra')) */

// console.log(String.fromCodePoint(120))

/* function extractCurrencyValue(str) {
    let num = '';
    while ((num = str[0].Number) != -1) {
        return num
    }
}
console.log(extractCurrencyValue('$120')) */



