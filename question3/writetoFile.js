let fs = require("fs");

const writeToFile = path => {
    for (let i = 0; i <= 9; i++) {
        fs.writeFile(`${path}/log${i}.txt`, 'Learn Node FS module', err => {
            if (err) throw err;

        })
        console.log(`log${i}.txt`)
    }
}
module.exports = {writeToFile}

