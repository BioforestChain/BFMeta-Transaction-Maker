import * as fs from "node:fs";
import * as path from "node:path";
import { REQUEST_PROTOCOL } from "./constants";

export class Config {
    private __config: TransactionMaker.Api.Config = {
        requestProtocol: REQUEST_PROTOCOL.WEBSOCKET,
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
        const { requestProtocol, ips, requestTimeout } = configOptions;
        requestProtocol !== undefined && (this.__config.requestProtocol = requestProtocol);
        ips !== undefined && (this.__config.ips = ips);
        requestTimeout !== undefined && (this.__config.requestTimeout = requestTimeout);
    }

    get config() {
        return this.__config;
    }
}
