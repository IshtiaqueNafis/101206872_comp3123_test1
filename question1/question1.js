const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const lowerCaseWords = (arrays) => new Promise((response, reject) => {
    let filterArray = arrays.filter(arr =>
        (typeof arr === "string" && !Number(arr)))
        .map(arr => arr.toLowerCase())

    if (filterArray.length >= 1) {
        return response(filterArray)
    } else if (filterArray.length === 0) {
        return reject('no string value found to modify on the array')
    }
})


lowerCaseWords(mixedArray).then(message => {
    console.log(message)
}).catch((err) => console.log(err))

