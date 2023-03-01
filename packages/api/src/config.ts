import * as fs from "node:fs";
import * as path from "node:path";

export class Config {
    private __config: TransactionMaker.Api.Config = {
        ips: ["127.0.0.1:8888"],
        requestTimeout: 10000,
    };

    constructor(configOptions?: TransactionMaker.Api.ConfigOptions) {
        const configPath = path.join(process.cwd(), "/config/config.json");
        if (fs.existsSync(configPath)) {
            this.setConfig(JSON.parse(fs.readFileSync(configPath, "utf-8")));
        }
        configOptions && this.setConfig(configOptions);
    }

    setConfig(configOptions: TransactionMaker.Api.ConfigOptions) {
        const { ips, requestTimeout } = configOptions;
        ips !== undefined && (this.__config.ips = ips);
        requestTimeout !== undefined && (this.__config.requestTimeout = requestTimeout);
    }

    get config() {
        return this.__config;
    }
}
