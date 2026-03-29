// More to the arrays

const marvelHeroes = ["Spiderman", "Hulk", "Thor"];
const dcHeroes = ["Batman", "Superman", "Joker"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes); // We tried to join to arrays but this resulted in array within an array. (nesting)


// USE OF flat()
// const updated = marvelHeroes.flat(Infinity);

// console.log(updated); // we can use flat function to solve nesting.

// const allHeroes = marvelHeroes.concat(dcHeroes);

// console.log(allHeroes); // Merges both arrays without nesting in a single line.

const moreHeroes = ["Ben10", "Doraemon", "Kitretsu"];

const allNewHeroes = [...marvelHeroes, ...dcHeroes, ...moreHeroes]

console.log(allNewHeroes); // Merges more than two arrays without nesting in a single line.

console.log(Array.isArray("Asmit"));

console.log(Array.from({name: "Asmit"})); // object

const user1Score = 200;
const user2Score = 400;
const user3Score = 600;

console.log(Array.of(user1Score, user2Score, user3Score));






