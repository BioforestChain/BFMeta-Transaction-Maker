import { HttpHelper, WebsocketHelper } from "./network";
import { CommonApi, TransactionApi, MigrateCertificateApi } from "./atom_api";
import { Config } from "./config";
import { REQUEST_PROTOCOL } from "./constants";

export class BFMetaTrMaker {
    private __config: Config;
    private __commonApi!: CommonApi;
    private __transactionApi!: TransactionApi;
    private __migrateCertificateApi!: MigrateCertificateApi;

    private __httpHelper: HttpHelper | undefined;
    get httpHelper() {
        if (this.__httpHelper) {
            return this.__httpHelper;
        } else {
            throw new Error(`httphelper is not init`);
        }
    }

    private __websocketHelper: WebsocketHelper | undefined;
    get websocketHelper() {
        if (this.__websocketHelper) {
            return this.__websocketHelper;
        } else {
            throw new Error(`websocketHelper is not init`);
        }
    }

    constructor(configOptions?: TransactionMaker.Api.ConfigOptions) {
        this.__config = new Config(configOptions);
        let networkHelper: TransactionMaker.NetworkHelper;
        if (this.__config.config.requestProtocol == REQUEST_PROTOCOL.HTTP) {
            networkHelper = this.__httpHelper = new HttpHelper(this.__config);
        } else {
            networkHelper = this.__websocketHelper = new WebsocketHelper(this.__config);
        }
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

    get migrateCertificate() {
        return this.__migrateCertificateApi;
    }

    setConfig(configOptions: TransactionMaker.Api.ConfigOptions) {
        return this.__config.setConfig(configOptions);
    }
}
