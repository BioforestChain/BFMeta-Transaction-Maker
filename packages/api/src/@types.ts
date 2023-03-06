declare namespace TransactionMaker {
    type NetworkHelper = import("./httpHelper").HttpHelper;

    namespace Api {
        interface Config {
            /**服务节点 ip, 默认值 [127.0.0.1:8888] */
            ips: string[];
            /**请求超时时间，单位 ms，默认 10000 */
            requestTimeout: number;
        }

        type ConfigOptions = Partial<Config>;
    }
}
