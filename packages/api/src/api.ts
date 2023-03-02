import { HttpHelper } from "./httpHelper";
import { CommonApi, TransactionApi, MigrateCertificateApi } from "./atom_api";
import { Config } from "./config";

export class BFMetaTrMaker {
    private __config: Config;
    private __commonApi!: CommonApi;
    private __transactionApi!: TransactionApi;
    private __migrateCertificateApi!: MigrateCertificateApi;

    constructor(configOptions?: TransactionMaker.Api.ConfigOptions) {
        this.__config = new Config(configOptions);
        const networkHelper = new HttpHelper(this.__config);
        this.__commonApi = new CommonApi(networkHelper);
        this.__transactionApi = new TransactionApi(networkHelper);
        this.__migrateCertificateApi = new MigrateCertificateApi(networkHelper);
    }

    get config() {
        return this.__config.config;
    }

    get common() {
        return this.__commonApi;
    }

    get transaction() {
        return this.__transactionApi;
    }

    get migrateCertificateApi() {
        return this.__migrateCertificateApi;
    }

    setConfig(configOptions: TransactionMaker.Api.ConfigOptions) {
        return this.__config.setConfig(configOptions);
    }
}
