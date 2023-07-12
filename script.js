// Задания от:
// task. Где находится магазин?
// до:
// task. Сумма оценок больше 10
// Выполнены в предыдущей работе

//task. Сумма чисел

console.log(
  "\n",
  "-------------------------Сумма чисел-----------------------------",
  "\n"
);
function sumNumbers(numbers) {
  if (numbers) {
    //Проверка на отсутствие параметра
    const sum = numbers.reduce((sum, current) => sum + current, 0);
    return sum;
  } else return 0;
}

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])); // 60
console.log(sumNumbers([2, 4, 2, 10])); // 18
console.log(sumNumbers([])); //0
console.log(sumNumbers()); //0

// task. Умножение чисел
console.log(
  "\n",
  "-------------------------Умножение чисел-----------------------------",
  "\n"
);

function multiplyNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    return "Параметр должен быть массивом.";
  }

  // Проверяем, есть ли в массиве элементы
  if (numbers.length === 0) {
    return "Массив не содержит элементов.";
  }

  // Умножаем все элементы в массиве
  const result = numbers.reduce((sum, current) => sum * current, 1);
  return result;
}

// Sample usage - do not modify
console.log(multiplyNumbers([10, 20, 30])); // 6000
console.log(multiplyNumbers([2, 4, 2, 10])); // 160
console.log(multiplyNumbers([])); //
console.log(multiplyNumbers()); //

// project. Подсчет оценок
// Ссылка на проект:
// https://codesandbox.io/s/stats-advanced-ii-da-lk89pc?file=/src/js/stats.js
// Тесты прошел

// task. Удалить элемент массива
console.log(
  "\n",
  "-------------------------Удаление элемента массива-----------------------------",
  "\n"
);

const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log("Первоначальный массив: " + apps);
console.log("Результат работы функции:");

function removeFirstApp(apps) {
  if (!Array.isArray(apps)) {
    return "Параметр должен быть массивом.";
  }

  // Проверяем, есть ли в массиве элементы
  if (apps.length === 0) {
    return "Массив не содержит элементов.";
  }

  apps.splice(0, 1);
  return apps;
}

// Sample usage - do not modify
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]
console.log(removeFirstApp([]));
console.log(removeFirstApp(1));

// task. Удаление второго элемента массива
console.log(
  "\n",
  "-------------------------Удаление 2 элемента массива-----------------------------",
  "\n"
);

const apps1 = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log("Первоначальный массив: " + apps1);
console.log("Результат работы функции:");

function removeSecondApp(apps1) {
  if (!Array.isArray(apps1)) {
    return "Параметр должен быть массивом.";
  }

  // Проверяем, есть ли в массиве элементы
  if (apps1.length === 0) {
    return "Массив не содержит элементов.";
  }

  apps1.splice(1, 1);
  return apps1;
}

// Sample usage
console.log(removeSecondApp(apps1)); // ["Calculator", "Chrome", "Firefox"]
console.log(removeSecondApp([])); // ["Calculator", "Chrome", "Firefox"]
console.log(removeSecondApp(10)); // ["Calculator", "Chrome", "Firefox"]

// Дополнительно не из ДЗ, которые поинтереснее

// task. Был ли использован символ?

console.log(
  "\n",
  "-------------------------Был ли использован символ-----------------------------",
  "\n"
);

function hasCharacterBeenUsed(characters, char) {
  return characters.includes(char);
}

// Sample usage - do not modify
console.log(hasCharacterBeenUsed(["A", "B", "C", "D"], "A")); // true
console.log(hasCharacterBeenUsed(["A", "B", "C", "D"], "F")); // false
console.log(hasCharacterBeenUsed(["A", "B"], "B")); // true
console.log(hasCharacterBeenUsed(["A", "B"], "C")); // false
console.log(hasCharacterBeenUsed([], "")); // false

console.log(
  "\n",
  "-------------------------Инициалы-----------------------------",
  "\n"
);
function abbrevName(name) {
  if (name && typeof name === "string") {
    const arr = name.split(" ");
    const name1 = arr[0][0].toUpperCase();
    const name2 = arr[1][0].toUpperCase();
    return name1 + "." + name2 + ".";
  }
  return "В качестве параметра передана не строка";
}

console.log(abbrevName("Sam Harris")); // "S.H."
console.log(abbrevName("дмитрий афанасьев")); // "Д.А."
console.log(abbrevName()); //
console.log(abbrevName(123)); //

console.log(
  "\n",
  "-------------------------Положительные и отрицательные элементы массива-----------------------------",
  "\n"
);

function countPositivesSumNegatives(arrOfNumbers) {
  let count = 0;
  let sum = 0;
  if (Array.isArray(arrOfNumbers)) {
    // если массив
    arrOfNumbers.forEach((element) => {
      if (element > 0) count++;
      else if (element < 0) sum += element;
    });
  }
  return [count, sum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]
console.log(countPositivesSumNegatives([])); // [0, 0]
console.log(countPositivesSumNegatives()); // [0, 0]

console.log(
  "\n",
  "-------------------------Перевертыши-----------------------------",
  "\n"
);

function reverseWords(str) {
  let line;
  rezult = [];
  if (str && typeof str === "string") {
    const arr = str.split(" ");
    arr.forEach((element) => {
      line = "";
      // for (let i = element.length - 1; i >= 0; i--) {
      //   line += element[i];
      // }
      line = Array.from(element).reverse().join(""); // строку - в массив, реверсируем и опять в строку
      rezult.push(line);
    });
    return rezult.join(" ");
  } else return "В качестве параметра передана не строка";
}

console.log(reverseWords("apple")); // 'elppa'
console.log(reverseWords("double  spaced  words")); // 'elbuod  decaps  sdrow'
console.log(reverseWords("")); //
console.log(reverseWords(1)); //

console.log(
  "\n",
  "-------------------------Дублируем значение-----------------------------",
  "\n"
);

function double(arr) {
  arr.forEach(function (element) {
    arr.push(element);
  });
  return arr;
}

arr = [1, 2, 3, 4, 5, 6];
console.log(double(arr));
