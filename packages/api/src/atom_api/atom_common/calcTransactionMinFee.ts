import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class CalcTransactionMinFeeApi extends CommonApi<TransactionMaker.Common.TransactionMinFee> {
    readonly EXEC_API_PATH = COMMON_API_PATH.CALC_TRANSACTION_MIN_FEE;

    async sendPostRequest(argv: TransactionMaker.Common.CalcTransactionMinFeeParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
