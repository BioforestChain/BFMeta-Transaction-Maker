import { TransactionApi } from "./_transactionApi";
import { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-core";

export class BeExchangeSpecialAssetApi extends TransactionApi<TransactionMaker.TransactionJSON> {
    readonly GENERATE_API_PATH = GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET;

    async generateTransaction(argv: TransactionMaker.Transaction.BeExchangeSpecialAssetTransactionParams, ip?: string) {
        return await super.generateTransaction(argv, ip);
    }

    async sendTransaction(argv: TransactionMaker.Transaction.BeExchangeSpecialAssetTransactionParams, ipInfo: TransactionMaker.IpInfo) {
        return await super.sendTransaction(argv, ipInfo);
    }
}
