import { MigrateCertificateApi } from "./_migrateCertificateApi";
import { MIGRATE_CERTIFICATE_API_PATH } from "@bfmeta/transaction-maker-core";

export class GenerateMigrateCertificateApi extends MigrateCertificateApi {
    readonly GENERATE_API_PATH = MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_GENERATE;

    async sendPostRequest(argv: TransactionMaker.CrossChain.GenerateMigrateCertificateParams, ip?: string) {
        try {
            const result = await this.networkHelper.createTransaction<TransactionMaker.Server.MigrateCertificateReturn>(this.GENERATE_API_PATH, argv, ip);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.MigrateCertificateFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.GENERATE_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
