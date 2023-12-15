function factorial(el) {
  result = 1;
  for (let i = 1; i <= el; i++) {
    result = result * i;
  }
  console.log(result);
}

factorial(5);

function jami(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

jami(13, 24, 1);

function reversednumber(el) {
  let result = el.toString().split("");
  let response = "";
  for (let i = result.length - 1; i >= 0; i--) {
    response += result[i];
  }
  console.log(response);
}

reversednumber(1234);

function reversedstr(str) {
  let response = "";
  for (let i = str.length - 1; i >= 0; i--) {
    response += str[i];
  }
  console.log(response);
}

reversedstr("Saba");

let arr = [
  {
    title: "rame",
    price: 1200,
    desc: "lorem10",
  },
  {
    title: "nika",
    price: 2000,
    desc: "lorem10",
  },
  {
    title: "kaxa",
    price: 3000,
    desc: "lorem10",
  },
  {
    title: "guja",
    price: 800,
    desc: "lorem10",
  },
  {
    title: "test",
    price: 1600,
    desc: "lorem10",
  },
];

let newarr = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (newarr.price < arr[i].price) {
    newarr = arr[i];
  }
}
console.log(newarr.price);

const ol = document.querySelector("ol");

async function GetData() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  data.slice(0, 10).forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el.title;
    ol.appendChild(li);
  });
}

GetData();

const mark = 73;
let grade;

switch (true) {
  case mark >= 90 && mark <= 100:
    grade = "S Grade";
    break;
  case mark >= 80 && mark < 90:
    grade = "A Grade";
    break;
  case mark >= 70 && mark < 80:
    grade = "B Grade";
    break;
  case mark >= 60 && mark < 70:
    grade = "C Grade";
    break;
  case mark >= 50 && mark < 60:
    grade = "D Grade";
    break;
  case mark >= 40 && mark < 50:
    grade = "E Grade";
    break;
  case mark >= 30 && mark < 40:
    grade = "Student Failed";
    break;
  default:
    grade = "Invalid Marks";
}

console.log(grade);

function removeDuplicates(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newarr.includes(arr[i])) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}

removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9]);

function removeDuplicates(arr) {
  let newarr = new Set(arr);
  let finalarr = Array.from(newarr);
  console.log(finalarr);
}

removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9]);

function countNameFrequency(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    if (newarr[name]) {
      newarr[name]++;
    } else {
      newarr[name] = 1;
    }
  }
  console.log(newarr);
}

countNameFrequency(["Alice", "Bob", "Charlie", "David", "Alice", "Eve"]);

function getUniqueWords(arr) {
  let splitted = arr.split(" ");
  let newarr = new Set(splitted);
  let finalarr = Array.from(newarr);

  console.log(finalarr);
}

getUniqueWords("This is a sample sentence with repeated words in it");

function uniqueSortedItems(arr) {
  let newarr = new Set(arr);
  let finalarr = Array.from(newarr);

  console.log(finalarr.sort());
}

uniqueSortedItems(["banana", "apple", "orange", "apple", "grape", "banana"]);

function doubleNumbers(arr) {
  let newarr = arr.map((el) => el * 2);
  console.log(newarr);
}

doubleNumbers([10, 20, 30, 40, 50]);

function totalCharacters(arr) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].length;
  }
  console.log(count);
}

totalCharacters(["apple", "banana", "cherry", "date"]);