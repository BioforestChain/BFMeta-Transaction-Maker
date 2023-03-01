import { CommonApi } from "./_commonApi";
import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class GenerateRegisterChainCertificateApi extends CommonApi<TransactionMaker.RegisterChainCertificateJSON> {
    readonly EXEC_API_PATH = COMMON_API_PATH.GENERATE_REGISTER_CHAIN_CERTIFICATE_API_PATH;

    async sendPostRequest(argv: TransactionMaker.Common.GenerateRegisterChainCertificateParams, ip?: string) {
        return super.sendPostRequest(argv, ip);
    }
}
