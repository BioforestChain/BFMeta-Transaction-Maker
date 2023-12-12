import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class ParseToMacroCallInputsApi extends CommonApi<TransactionMaker.Common.MacroCallInputs> {
    readonly EXEC_API_PATH = COMMON_API_PATH.PARSE_TO_MACRO_CALL_INPUTS;

    async sendPostRequest(argv: TransactionMaker.Common.ParseToMacroCallInputsParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
