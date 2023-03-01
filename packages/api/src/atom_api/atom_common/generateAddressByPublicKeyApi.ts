import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class GenerateAddressByPublicKeyApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_ADDRESS_BY_PUBLICKEY;

    async sendPostRequest(argv: TransactionMaker.Common.GenerateAddressByPublicKeyParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
