import type { Config } from "../config";
import type { Socket } from "socket.io-client";
import * as io from "socket.io-client";

function sleep(ms: number) {
    return new Promise<void>((cb) => setTimeout(cb, ms));
}

export class WebsocketHelper {
    private __config: Config;

    constructor(config: Config) {
        this.__config = config;
        this.__init().catch((e) => {});
    }

    private __getUrl(ip?: string) {
        if (ip) {
            return `http://${ip}`;
        }
        const ips = this.__config.config.ips;
        return `http://${ips[Math.floor(Math.random() * ips.length)]}`;
    }

    private __getWebsocketHost(url: string) {
        return `${url}/transactionMaker`;
    }

    private __socketMap = new Map<string, Socket>();

    private async __init() {
        try {
            const taskList: Promise<void>[] = [];
            const { ips } = this.__config.config;
            for (const ip of ips) {
                const url = this.__getUrl(ip);
                if (!this.__socketMap.has(url)) {
                    taskList.push(this.connect(url));
                }
            }
            await Promise.all(taskList);
            await sleep(60 * 1000);
        } catch (error) {
            await sleep(1000);
        }
    }

    async connect(url: string) {
        try {
            const socket = await this.__connect(url);
            this.__bindEvent(socket, url);
        } catch (error) {
            console.debug(error);
        }
    }

    private __connect(url: string) {
        return new Promise<Socket>((resolve, reject) => {
            const wsHost = this.__getWebsocketHost(url);
            const socket = io.connect(wsHost, {
                transports: ["websocket"],
                timeout: this.__config.config.requestTimeout,
                transportOptions: {
                    websocket: {
                        maxPayload: 200 * 1024 * 1024,
                    },
                },
            });
            socket.on("connect", () => {
                console.debug(`connected to ${url}`);
                this.__socketMap.set(url, socket);
                return resolve(socket);
            });
            socket.on("connect_error", (data: any) => {
                return reject(new Error(`connect_error ${url} data:${data}`));
            });
            socket.on("connect_timeout", (data: any) => {
                return reject(new Error(`connect_timeout ${url} data:${data}`));
            });
        });
    }

    private __bindEvent(socket: Socket, url: string) {
        socket.on("reconnect_error", (data: any) => {
            throw Error(`reconnect_error ${url} data:${data}`);
        });
        socket.on("error", (data: any) => {
            throw Error(`error ${url} data:${data}`);
        });
        socket.on("disconnect", () => {
            this.__socketMap.delete(url);
        });
    }

    getSocket() {
        if (this.__socketMap.size === 0) {
            return undefined;
        }
        // 节点数量不会多到哪去，这样估计就够了
        const sockets = [...this.__socketMap.values()];
        return sockets[Math.floor(Math.random() * sockets.length)];
    }

    createTransaction<T>(url: string, argv: { [key: string]: any }) {
        return new Promise<T>(async (resolve, reject) => {
            const socket = this.getSocket();
            if (!socket) {
                return reject(new Error(`no nodes available`));
            }
            const onError = () => {
                reject(new Error(`request timeout ${url}`));
            };
            const offEvent = () => {
                socket.off("error", onError);
                socket.off("disconnect", onError);
            };
            try {
                socket.emit(url, argv, (result: T) => {
                    offEvent();
                    return resolve(result);
                });
                socket.once("error", onError);
                socket.once("disconnect", onError);
            } catch (e) {
                offEvent();
                return reject(e);
            }
        });
    }

    async sendGetRequest<T>(url: string, argv?: { [key: string]: any }) {
        return new Promise<T>(async (resolve, reject) => {
            let timeoutId!: NodeJS.Timeout;
            try {
                timeoutId = setTimeout(() => {
                    clearTimeout(timeoutId);
                    reject(new Error(`request timeout ${url}`));
                }, this.__config.config.requestTimeout);
                const socket = this.getSocket();
                if (!socket) {
                    return reject(new Error(`no nodes available`));
                }
                socket.emit(url, argv, (result: T) => {
                    clearTimeout(timeoutId);
                    return resolve(result);
                });
            } catch (e) {
                clearTimeout(timeoutId);
                return reject(e);
            } finally {
                clearTimeout(timeoutId);
            }
        });
    }

    sendPostRequest = this.createTransaction;
}
