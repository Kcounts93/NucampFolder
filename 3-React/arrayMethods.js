// Array.map() review Higher order function

// const names = ["anne", "barry", "chloe"];
// const bigNames = names.map((name) => name.toUpperCase());

// console.log(bigNames);
// console.log(names);

// Array.filter() and Array.find() basic syntax
// const newArray = Array.filter(callbackFn);
// const value = Array.find(callbackFn);

const things = [
  {
    id: 0,
    title: "whiskers on kittens",
    favorite: true,
    points: 97,
  },
  {
    id: 1,
    title: "raindrops on roses",
    favorite: true,
    points: 77,
  },
  {
    id: 2,
    title: "brown paper packages tied up with string",
    favorite: true,
    points: 87,
  },
  {
    id: 3,
    title: "dog bite",
    favorite: false,
    featured: "true",
    points: 12,
  },
  {
    id: 4,
    title: "bee sting",
    favorite: false,
    points: 6,
  },
];
// filter
// const myFavoriteThings = things.filter((thing) => thing.favorite);
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// find
const selectThingByID = (id) => {
  return things.find((things) => things.id === 4);
};
const selectedThing = selectThingByID(4);
console.log(selectedThing);

// Bonus Challenge

// const featuredThingByProp = (featured) => {
//   return things.find((things) => things.featured === "true");
// };
// const featuredThing = featuredThingByProp("true");
// console.log(featuredThing);

// Should write like this...
// const featuredThing = things.find((thing) => thing.featured);
