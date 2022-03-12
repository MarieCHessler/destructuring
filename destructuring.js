/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [38, 26, 27];

//let john = ages[0]; // John is 38
//let mary = ages[2]; // Mary is 27
//let joe = ages[1]; // Joe is 26

let [john, mary, joe] = ages; // Destructured = Same result in terminal as if writing the three lines above, but from only one line of code
console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let[johnNative, johnSecondary] = languages; // First and second languages are selected
console.log(johnNative, johnSecondary)

let[, , maryNative, marySecondary] = languages; // Third and fourth languages are selected
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: "english", // This is selected
    secondLanguage: "french",
    thirdLanguage: "german", // And this is selected
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits; // ...others is the rest parameter
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
