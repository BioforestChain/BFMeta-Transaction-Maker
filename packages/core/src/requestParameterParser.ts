import type { IncomingMessage } from "node:http";
import * as url from "node:url";

export function parseGetRequestParameter(imcomingMessage: IncomingMessage) {
    return new Promise<{ [key: string]: any }>((resolve, reject) => {
        if (!imcomingMessage.url) {
            return reject(new Error(`request url lose`));
        }
        imcomingMessage.on("error", (error) => {
            return reject(error);
        });
        try {
            const req = url.parse(imcomingMessage.url, true);
            return resolve(req.query);
        } catch (e: any) {
            return reject(new Error(`parse parameter error`));
        }
    });
}

export function parsePostRequestParameter(imcomingMessage: IncomingMessage) {
    return new Promise<{ [key: string]: any }>((resolve, reject) => {
        const buffers: Uint8Array[] = [];
        imcomingMessage.on("error", (error) => {
            return reject(error);
        });
        imcomingMessage.on("data", (chunk: Uint8Array) => buffers.push(chunk));
        imcomingMessage.on("end", () => {
            const requestString = Buffer.concat(buffers).toString();
            try {
                return resolve(JSON.parse(requestString));
            } catch (e: any) {
                return reject(new Error(`parse parameter error`));
            }
        });
    });
}
