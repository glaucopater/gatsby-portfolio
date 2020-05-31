/*
    usage (from root folder): 
    
    node scripts/cli.js src/data/color/ > src/data/color.yml
    or in windows
    node scripts\cli.js src/data/color/
*/

const utils = require("./utils");
const sourcePath = process.argv[2];
utils.createYmlFile(sourcePath);
