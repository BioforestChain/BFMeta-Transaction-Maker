// @ts-check

const fs = require("node:fs");
const path = require("node:path");

const rootPath = path.join(process.cwd(), "/packages");

const description = "for the third party";

function overwrite(rootPath) {
    if (!fs.existsSync(rootPath)) {
        return;
    }
    const packageNames = fs.readdirSync(rootPath);
    for (const packageName of packageNames) {
        const packagePath = path.join(rootPath, `${packageName}/package.json`);
        const packageJson = JSON.parse(fs.readFileSync(packagePath).toString());
        const items = packageJson.name.split("/");
        const name = items.length > 1 ? items[1] : items[0];
        packageJson.description = `${name} ${description}`;
        packageJson.keywords = [`${name}`];
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 4));
        console.log(`更新 ${packagePath}`);
    }
}

overwrite(rootPath);
