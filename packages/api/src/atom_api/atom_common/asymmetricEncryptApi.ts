import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class AsymmetricEncryptApi extends CommonApi<TransactionMaker.Common.AsymmetricEncrypt> {
    readonly EXEC_API_PATH = COMMON_API_PATH.ASYMMETRIC_ENCRYPT;

    async sendPostRequest(argv: TransactionMaker.Common.AsymmetricEncryptParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
