import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class GenerateCiphertextSignatureApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_CIPHERTEXT_SIGNATURE;

    async sendPostRequest(argv: TransactionMaker.Common.GenerateCiphertextSignatureParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
