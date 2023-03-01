import { MigrateCertificateApi } from "./_migrateCertificateApi";
import { MIGRATE_CERTIFICATE_API_PATH } from "@bfmeta/transaction-maker-core";

export class FromAuthSignatureMigrateCertificateApi extends MigrateCertificateApi {
    readonly GENERATE_API_PATH = MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_FROM_AUTH_SIGNATURE;

    async sendPostRequest(argv: TransactionMaker.CrossChain.AuthSignMigrateCertificateArgs, ip?: string) {
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
