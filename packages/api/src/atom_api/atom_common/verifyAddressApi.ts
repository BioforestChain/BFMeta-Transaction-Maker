import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class VerifyAddressApi extends CommonApi<boolean> {
    readonly EXEC_API_PATH = COMMON_API_PATH.VERIFY_ADDRESS;

    async sendPostRequest(argv: TransactionMaker.Common.VerifyAddressParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
