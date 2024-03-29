import { _TransactionApi } from "./_transactionApi";
import { UTIL_API_PATH } from "@bfmeta/transaction-maker-typings";

/**
 * 工具接口
 */
export class UtilApi {
    constructor(protected networkHelper: TransactionMaker.NetworkHelper) {}

    readonly RECOMBINE_API_PATH = UTIL_API_PATH.RECOMBINE;

    /**
     * 对交易进行签名
     * @param argv
     * @param ip
     * @returns
     */
    async recombineTransaction<T extends TransactionMaker.TransactionJSON>(argv: TransactionMaker.Transaction.RecombineTransactionParams<T>, ip?: string) {
        try {
            const result = await this.networkHelper.createTransaction<TransactionMaker.Server.GenerateTransactionReturn<T>>(this.RECOMBINE_API_PATH, argv, ip);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.GenerateTransactionFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.RECOMBINE_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    readonly MACRO_BUILD_API_PATH = UTIL_API_PATH.MACRO_BUILD;
    async macroBuildTransaction<T extends TransactionMaker.TransactionJSON>(argv: TransactionMaker.Transaction.MacroBuildTransactionParams) {
        try {
            const result = await this.networkHelper.sendPostRequest<TransactionMaker.Server.GenerateTransactionReturn<T>>(this.MACRO_BUILD_API_PATH, argv);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.GenerateTransactionFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.RECOMBINE_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    readonly BROADCAST_API_PATH = UTIL_API_PATH.BROADCAST;
    /**
     * 广播交易
     * @param argv
     * @returns
     */
    async broadcastTransaction(argv: TransactionMaker.Transaction.BroadcastTransactionParams) {
        try {
            const result = await this.networkHelper.sendPostRequest<TransactionMaker.Server.BroadcastTransactionReturn>(this.BROADCAST_API_PATH, argv);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.BroadcastTransactionFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `broadcast transaction ${this.BROADCAST_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    readonly CHANGE_BLOBS_PATH_API_PATH = UTIL_API_PATH.CHANGE_BLOBS_PATH;
    /**
     * 更改blob存储区域
     * @param argv
     * @returns
     */
    async changeBlobsPath(argv: TransactionMaker.Transaction.ChangeBlobsPathParams) {
        try {
            const result = await this.networkHelper.sendPostRequest<TransactionMaker.Server.BroadcastTransactionReturn>(this.CHANGE_BLOBS_PATH_API_PATH, argv);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.BroadcastTransactionFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.CHANGE_BLOBS_PATH_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
