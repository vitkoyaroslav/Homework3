'use strict';

//Task 1 Homework 3 с предусловием
let number = 4;

while(number <= 400){
    console.log(number++);
}

//Task 1 Homework 3 с постусловием
let number = 4;

do {
    console.log(number++)
} while(number <= 400)

//Task 1 Homework 3 универсальный
 for (let number = 4; number <= 400; number++){
 console.log(number)
}

//Task 2 Homework 3
for (let number = 4; number <= 13; number += 3){
    console.log(number)
}

//Task 3 Homework 3
for (let number = 654; number >= 0; number--){
    console.log(number)
}

//Task 4 Homework 3
for (let year = 1983; year <= 2017; year++){
    console.log(year + ' год')
}

//Task 5 Homework 3
for (let number = -4; number <= 100; number +=2){
   console.log(number)
 }

//Task 6 Homework 3
for (let a = 1; a <= 9; a ++){
  for (let b = 7;  b <= 7; b++) {
      console.log (a * b)
  }
}

//Task 7 Homework 3
for (let number = 1000; number <= 2000; number++){
    console.log('&#' + number)
}

//Task 7 Homework 3
for (let number = 1; number <= 3; number*=){
    console.log(number)
}

//Task 8 Homework 3
let sum = 0;
for (let num = 1; num <= 100; num++) {
    sum = sum + num;
}
console.log(sum);

//Task 9 Homework 3
let mult = 1;
for (let num = 1; num <= 50; num++){
    mult = mult * num;
}
console.log(mult)