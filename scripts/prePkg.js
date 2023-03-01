const { readFileSync, writeFileSync } = require("node:fs");
const originPackage = readFileSync(process.cwd() + "/package.json");
const package = JSON.parse(originPackage.toString());
delete package.devDependencies;
writeFileSync(process.cwd() + "/package.json", JSON.stringify(package));
writeFileSync(process.cwd() + "/temp.json", originPackage);
