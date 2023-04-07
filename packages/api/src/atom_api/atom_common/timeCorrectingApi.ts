import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class TimeCorrectingApi extends CommonApi<number> {
    readonly EXEC_API_PATH = COMMON_API_PATH.TIME_CORRECTING;

    async sendPostRequest(argv: TransactionMaker.Common.TimeCorrectingParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
