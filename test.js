const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const family = ["mother", "father", "son", "son", "son", "daughter"];
const numbers = [1, 2, 3, 3, 3, 5, 3, 7, 5, 6, 9, 1, 1];

const countItems = (list) => {
  const count = {};

  list.forEach((e) => {
    if (count[e]) {
      count[e]++;
    } else {
      count[e] = 1;
    }
  });
  return count;
};

const fruitsCount = Object.entries(countItems(fruits));
const familyCount = Object.entries(countItems(family));
const numbersCount = Object.entries(countItems(numbers));

console.log("Счетчик для фруктов:", fruitsCount);
console.log("Счетчик для семьи:", familyCount);
console.log("Счетчик для чисел:", numbersCount);

const fruitsUnique = Array.from(new Set(fruits));
const familyUnique = Array.from(new Set(fruits));
const numbersUnique = Array.from(new Set(fruits));

console.log("Уникальные для фруктов:", fruitsUnique);
console.log("Уникальные для семьи:", familyUnique);
console.log("Уникальрные для чисел:", numbersUnique);


