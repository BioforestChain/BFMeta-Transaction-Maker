import { _TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-typings";

export class PromiseResolveApi extends _TransactionApi<TransactionMaker.TransactionJSON> {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_PROMISE_RESOLVE;

    async generateTransaction(argv: TransactionMaker.Transaction.PromiseResolveTransactionParams, ip?: string) {
        return await super.generateTransaction(argv, ip);
    }

    async sendTransaction(argv: TransactionMaker.Transaction.PromiseResolveTransactionParams, ipInfo: TransactionMaker.IpInfo) {
        return await super.sendTransaction(argv, ipInfo);
    }
}
