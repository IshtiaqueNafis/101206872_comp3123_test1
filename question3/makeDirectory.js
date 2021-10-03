const fs = require("fs")
    const dir = './Logs';
const makeDir = () =>{

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}
module.exports = {makeDir,dir}