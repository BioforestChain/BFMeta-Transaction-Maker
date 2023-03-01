import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-core";

export class BeExchangeAssetApi extends TransactionApi<TransactionMaker.TransactionJSON> {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET;

    async generateTransaction(argv: TransactionMaker.Transaction.BeExchangeAssetTransactionParams, ip?: string) {
        return await super.generateTransaction(argv, ip);
    }

    async sendTransaction(argv: TransactionMaker.Transaction.BeExchangeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo) {
        return await super.sendTransaction(argv, ipInfo);
    }
}
