import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-core";

export class ToExchangeAnyMultiApi extends TransactionApi<TransactionMaker.TransactionJSON> {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI;

    async generateTransaction(argv: TransactionMaker.Transaction.ToExchangeAnyMultiTransactionParams, ip?: string) {
        return await super.generateTransaction(argv, ip);
    }

    async sendTransaction(argv: TransactionMaker.Transaction.ToExchangeAnyMultiTransactionParams, ipInfo: TransactionMaker.IpInfo) {
        return await super.sendTransaction(argv, ipInfo);
    }
}
