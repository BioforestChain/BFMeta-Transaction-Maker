import type { Config } from "./config";
import * as http from "node:http";
import { parsePostRequestParameter } from "@bfmeta/transaction-maker-core";

export class HttpHelper {
    private __config: Config;

    constructor(config: Config) {
        this.__config = config;
    }

    private __getUrl(apiPath: string, ip?: string) {
        if (ip) {
            return `http://${ip}${apiPath}`;
        }
        const ips = this.__config.config.ips;
        return `http://${ips[Math.floor(Math.random() * ips.length)]}${apiPath}`;
    }

    createTransaction<T>(apiPath: string, argv: { [key: string]: any }, ip?: string) {
        return new Promise<T>((resolve, reject) => {
            const req = http.request(this.__getUrl(apiPath, ip), { method: "POST", headers: { "content-type": "application/json" } }, async (res) => {
                const body = await parsePostRequestParameter(res);
                return resolve(body as any);
            });
            req.setTimeout(this.__config.config.requestTimeout, () => {
                return reject(new Error("timeout"));
            });
            req.on("error", (e) => {
                return reject(e);
            });
            req.write(JSON.stringify(argv));
            req.end();
        });
    }

    sendGetRequest<T>(apiPath: string, argv?: { [key: string]: any }, ip?: string) {
        const completeUrl = this.__getUrl(apiPath, ip) + (argv ? `?${JSON.stringify(argv)}` : "");
        return new Promise<T>((resolve, reject) => {
            const req = http.get(completeUrl, async (res) => {
                const body = await parsePostRequestParameter(res);
                return resolve(body as any);
            });
            req.setTimeout(this.__config.config.requestTimeout, () => {
                return reject(new Error("timeout"));
            });
            req.on("error", (e) => {
                return reject(e);
            });
        });
    }

    sendPostRequest = this.createTransaction;
}
