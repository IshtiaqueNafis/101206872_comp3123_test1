const fs = require("fs");


const deleteFromFile = (dir) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            throw err;
        }

        // files object contains all files names
        // log them on console
        files.forEach(file => {
            fs.unlinkSync(`${dir}/${file}`)
            console.log(`deleting files ........... ${file}`)

        });
    });

}

module.exports = {deleteFromFile}

