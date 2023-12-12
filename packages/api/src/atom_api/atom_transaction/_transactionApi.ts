import type { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-typings";
import type { UtilApi } from "./utilApi";

export abstract class _TransactionApi<T extends TransactionMaker.TransactionJSON> {
    abstract readonly GENERATE_API_PATH: GENERATE_TRANSACTION_API_PATH;

    constructor(protected networkHelper: TransactionMaker.NetworkHelper, protected util: UtilApi) {}

    async generateTransaction(argv: TransactionMaker.Transaction.TransactionCommonParams, ip?: string) {
        try {
            const result = await this.networkHelper.createTransaction<TransactionMaker.Server.GenerateTransactionReturn<T>>(this.GENERATE_API_PATH, argv, ip);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.GenerateTransactionFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.GENERATE_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    async sendTransaction(argv: TransactionMaker.Transaction.TransactionCommonParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const generateResult = await this.generateTransaction(argv, ipInfo.ip);
        if (!generateResult.success) {
            // FIXME: 更好的写法
            return { ...generateResult, minFee: argv.fee };
        }
        const broadcastResult = await this.util.broadcastTransaction({
            transaction: generateResult.result,
            ip: ipInfo.nodeIp,
        });
        return broadcastResult;
    }
}
