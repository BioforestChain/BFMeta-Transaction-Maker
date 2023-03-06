import { GENERATE_TRANSACTION_API_PATH, BROADCAST_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-core";

export abstract class TransactionApi<T extends TransactionMaker.TransactionJSON> {
    abstract readonly GENERATE_API_PATH: GENERATE_TRANSACTION_API_PATH;

    readonly BROADCAST_API_PATH = BROADCAST_TRANSACTION_API_PATH;

    constructor(protected networkHelper: TransactionMaker.NetworkHelper) {}

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

    async sendTransaction(argv: TransactionMaker.Transaction.TransactionCommonParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const generateResult = await this.generateTransaction(argv, ipInfo.ip);
        if (!generateResult.success) {
            // FIXME: 更好的写法
            return { ...generateResult, minFee: argv.fee };
        }
        const broadcastResult = await this.broadcastTransaction({
            transaction: generateResult.result,
            ip: ipInfo.nodeIp,
        });
        return broadcastResult;
    }
}
