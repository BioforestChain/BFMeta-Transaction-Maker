import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class VerifyPublicKeyApi extends CommonApi<boolean> {
    readonly EXEC_API_PATH = COMMON_API_PATH.VERIFY_PUBLICKEY;

    async sendPostRequest(argv: TransactionMaker.Common.VerifyPublicKeyParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
