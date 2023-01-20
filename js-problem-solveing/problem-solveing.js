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

const array2 = [
  0,
  2,
  3,
  4,
  5,
  6,
  ["name", [1, 2, ["a", "b"]], 2],
  [0, 1],
  "mahabub",
];
console.log(array2.flat(Infinity));
