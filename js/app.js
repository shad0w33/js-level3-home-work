// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findBiggestWord(str) {
    const arrayWords = str.split(" ");
  
    let wordLength = arrayWords[0];
  
    for (const i of arrayWords) {
      if (i.length > wordLength.length) {
        wordLength = i;
      }
    }
    return wordLength;
  }
  
  console.log(findBiggestWord("One Two Free Four Five Six Seven"));
  

// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number) {
    return number.split("").reverse().join(""); 
}

console.log(reverseNumber("0987651234"));

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function unique(str) {
    let only = "";
    for (let i=0; i < str.length; i++) {
      if(only.indexOf(str.charAt(i))==-1) {
         only += str[i];  
      }
    }
     return only;  
   }  

   console.log(unique("hoooommeeeee"));

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loss) {
  return win*3 + draw + loss*0;
}

  console.log(calcPoints(3, 5, 3));

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

var numbers = [5, 10, 22, 3, 8, 12, 40];

function statisctics(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
    avg: sum/arr.length
  }
}

console.log(statisctics(numbers));

// 6.Написать функцию которая принимает массив работников компании 

const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
 ];

function averageDepartmentSalary(workers) {
  const depResult = {};
for (const worker of workers) {
  const {department, salary} = worker;
     if (depResult[department]) {
    depResult[department].sumSalary += salary;
    depResult[department].quantity += 1;
  } else {
      depResult[department] = {
      sumSalary: salary,
      quantity: 1,
    }
  }
}
let maxAverageSalary = 0;
let depMaxAverageSalary = '';
for (const department in depResult) {
  const {sumSalary, quantity} = depResult[department];
  const averageSalary = sumSalary / quantity;
  if (averageSalary > maxAverageSalary) {
    maxAverageSalary = averageSalary;
    depMaxAverageSalary = department;
  }
}
return {
  department: depMaxAverageSalary,
  average: maxAverageSalary,
}
}
console.log(averageDepartmentSalary(workers));
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments.