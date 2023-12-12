import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class GenerateKeypairApi extends CommonApi<TransactionMaker.Common.Keypairs> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_KEYPAIR;

    async sendPostRequest(argv: TransactionMaker.Common.GenerateKeypairParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
