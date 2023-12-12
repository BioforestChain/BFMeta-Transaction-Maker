import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class MaybePeerInfoApi extends CommonApi<TransactionMaker.Common.MaybePeerInfo> {
    readonly EXEC_API_PATH = COMMON_API_PATH.MAYBE_PEER_INFO;

    async sendPostRequest(argv: TransactionMaker.Common.MaybePeerInfoParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
