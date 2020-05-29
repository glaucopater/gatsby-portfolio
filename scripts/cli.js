/*
    usage: 
    node cli foldername
*/

const utils = require("./utils");
const sourcePath = process.argv[2];
utils.createYmlFile(sourcePath);
