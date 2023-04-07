import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class TransactionMakerInfoApi extends CommonApi<TransactionMaker.Common.TransactionMakerInfo> {
    readonly EXEC_API_PATH = COMMON_API_PATH.TRANSACTION_MAKER_INFO;

    async sendPostRequest(argv: TransactionMaker.Common.CommonParams = {}, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
