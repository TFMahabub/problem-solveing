// 1. remove falsey value from an array:-
// const array = [1, 3, 0, false, true, null, undefined, []];

// const result = array.filter(Boolean);
// console.log(result);

// 2. convert any value to boolean:-
// console.log(!!"mahabub");
// console.log(!!0);
// console.log(!!undefined);
// console.log(!!1);
// console.log(Boolean(undefined));
// console.log(Boolean("abc"));

// 3. Resize any array:-
// const animal = ["dog", "cat", "moncky", "lion"];
// animal.length = 3;
// console.log(animal);

// 4. How to flattern a multi dimensional array:-
// const array = [0, 2, 3, 4, 5, 6, ["name", 2], [0, 1], "mahabub"];
// console.log(array.flat());

//another way:-
// const array2 = [
//   0,
//   2,
//   3,
//   4,
//   5,
//   6,
//   ["name", [1, 2, ["a", "b"]], 2],
//   [0, 1],
//   "mahabub",
// ];
// console.log(array2.flat(Infinity));

// 5. Replase an String word from a sentence:-
// const title =
//   "mahabub alam is web developer. he love to do web developerment. he already did up to 15 web development project";

// const replasedResult = title.replace(/web/g, "Frontend");

// console.log(replasedResult);

// 6. smart way to console.log for developers:-
// const name1 = "mahabub";
// const name2 = "alam";

// console.log(`name1 -${name1}`);
// console.log(`name2 -${name2}`);

// console.log({ name1 });
// console.log({ name2 });

// 7. Bring out How many time take to finish the action:-
// const startTime = performance.now();

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// const endTime = performance.now();
// console.log(startTime + "second", endTime + "second");

// 8. Swapping values:-
// let array = [1, 2, 3, 4, 5];
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// //another shortcut way to swap values
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

// 9. change object properties name:-
// const language = {
//   name: "mahabub",
//   age: 24,
//   country: "Bangladesh",
// };

// const { name: Name, age: Age, country: Country } = language;
// console.log(Name, Age, Country);

// 10. get value as data type;-
// e.target.name.valueAsNumber;
// e.target.checkMark.valueAsBoolean;
// e.target.Date.valueAsDate;

// 11. Remove duplicated value from an array:-
// const duplicateValue = [1, 1, 3, 3, 4, 5, 6, 7, 7];

// const removeDuplicateValue = [...new Set(duplicateValue)];

// console.log(removeDuplicateValue);

// 12. Compare  two arrays by values:-
// const hasSameElements = (a, b) => {
//   return a.length === b.length && a.every((value, index) => value === b[index]);
//   // return b.length === a.length && b.every((value, index) => value === a[index]);
// };
// console.log(hasSameElements([1, "3"], [1, "4"]));

// 13. coma(,) oparator useCase:-
let x = 1;
x = (x++, x);
console.log(x);

let y = (1, 4);
console.log(y);
