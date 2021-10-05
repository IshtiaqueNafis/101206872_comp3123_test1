const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const lowerCaseWords = (arrays) => arrays.filter(arr =>
    (typeof arr === "string" && !Number(arr)))
    .map(arr => arr.toLowerCase())


console.log(lowerCaseWords(mixedArray))