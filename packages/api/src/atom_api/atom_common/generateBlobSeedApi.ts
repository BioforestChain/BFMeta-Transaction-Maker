import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class GenerateBlobSeedApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_BLOB_SEED;

    async sendPostRequest(argv: TransactionMaker.Common.GenerateBlobSeedParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
