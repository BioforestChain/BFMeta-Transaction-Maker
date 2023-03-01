// @ts-check
const fs = require("node:fs");
const path = require("node:path");
const rootpath = path.resolve(__dirname, "../packages");

const dependencies = {
    "@bfchain/coretools": "~3.0.12",
    "@bfchain/license": "~4.0.4",
    "@bfchain/protobuf": "~4.1.10",
    "@bfchain/util": "~4.12.44",
};

function package() {
    const files = fs.readdirSync(rootpath);
    for (const file of files) {
        if (file === "@types") {
            continue;
        }
        const filepath = `${rootpath}/${file}/package.json`;
        const package = JSON.parse(fs.readFileSync(filepath).toString());
        for (const pkg in dependencies) {
            if (package.dependencies) {
                for (const key in package.dependencies)
                    if (key === pkg || key.includes(`${pkg}-`)) {
                        package.dependencies[key] = dependencies[pkg];
                    }
            }
        }
        fs.writeFileSync(filepath, JSON.stringify(package, null, 2));
    }
}

package();
