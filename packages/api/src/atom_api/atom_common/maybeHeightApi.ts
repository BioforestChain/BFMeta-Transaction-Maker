import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class MaybeHeightApi extends CommonApi<number> {
    readonly EXEC_API_PATH = COMMON_API_PATH.MAYBE_HEIGHT;

    async sendPostRequest(argv: TransactionMaker.Common.MaybeHeightParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
