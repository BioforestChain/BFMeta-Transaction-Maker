import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class GenerateAddressBySecretApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_ADDRESS_BY_SECRET;

    async sendPostRequest(argv: TransactionMaker.Common.GenerateAddressBySecretParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
