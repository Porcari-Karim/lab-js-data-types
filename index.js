/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const concatenatedString = s1 + s2 + s3 + s4 + s5;
// const concatenatedString = [s1, s2, s3, s4, s5].reduce((pre, curr) => pre + curr)

// Print out the concatenated string
console.log(concatenatedString);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const uppercaseLastLetter = (strToUpper) => {
    return strToUpper.slice(0, strToUpper.length - 1) + strToUpper.at(-1).toUpperCase()
} 

const toCamelTailed = (...strArray) => strArray.map((elem) => uppercaseLastLetter(elem))
                                                .reduce((last, curr) => last + curr);

// Print the cameLtaiL-formatted string
console.log(toCamelTailed(part1, part2));



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const CalculateTip = (billPrice) => billPrice * .15; 

// Print out the tipAmount

console.log(CalculateTip(billTotal));




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const generateRandomRengedInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Print the generated random number

console.log(generateRandomRengedInt(1, 11));



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// False

const expression2 = a || b;
// True

const expression3 = !a && b;
// False

const expression4 = !(a && b);
// True

const expression5 = !a || !b;
// True

const expression6 = !(a || b);
// False

const expression7 = a && a;
// True