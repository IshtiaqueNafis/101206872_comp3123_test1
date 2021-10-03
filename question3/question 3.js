const fs = require("fs");
const {dir,makeDir} = require("./makeDirectory")
const {writeToFile} =require("./writetoFile")
const {deleteFromFile} = require("./DeleteFromFile");
makeDir()
writeToFile(dir)
deleteFromFile(dir)
