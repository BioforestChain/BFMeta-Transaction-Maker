declare namespace TransactionMaker {
    type HttpHelper = import("./network").HttpHelper;
    type WebsocketHelper = import("./network").WebsocketHelper;
    type NetworkHelper = HttpHelper | WebsocketHelper;
    type REQUEST_PROTOCOL = import("./constants").REQUEST_PROTOCOL;

    namespace Api {
        interface Config {
            /**请求协议, http || websocket, 默认值 websocket */
            requestProtocol: REQUEST_PROTOCOL;
            /**服务节点 ip, 默认值 [127.0.0.1:8888] */
            ips: string[];
            /**请求超时时间，单位 ms，默认 10000 */
            requestTimeout: number;
        }

        type ConfigOptions = Partial<Config>;
    }
}
