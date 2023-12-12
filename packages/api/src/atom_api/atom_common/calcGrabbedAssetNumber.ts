import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-typings";

export class CalcGrabbedAssetNumberApi extends CommonApi<string> {
    readonly EXEC_API_PATH = COMMON_API_PATH.CALC_GRABBED_ASSET_NUMBER;

    async sendPostRequest(argv: TransactionMaker.Common.CalcGrabbedAssetNumberParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
