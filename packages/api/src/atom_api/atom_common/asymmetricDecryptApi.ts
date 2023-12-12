import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class AsymmetricDecryptApi extends CommonApi<TransactionMaker.Common.AsymmetricDecrypt> {
    readonly EXEC_API_PATH = COMMON_API_PATH.ASYMMETRIC_DECRYPT;

    async sendPostRequest(argv: TransactionMaker.Common.AsymmetricDecryptParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
