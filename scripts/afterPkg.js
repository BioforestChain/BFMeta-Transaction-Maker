const { readFileSync, writeFileSync, unlinkSync } = require("node:fs");
const originPackage = readFileSync(process.cwd() + "/temp.json");
writeFileSync(process.cwd() + "/package.json", originPackage);
unlinkSync(process.cwd() + "/temp.json");
