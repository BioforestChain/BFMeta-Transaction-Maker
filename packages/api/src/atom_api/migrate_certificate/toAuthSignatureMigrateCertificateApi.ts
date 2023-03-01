import { MigrateCertificateApi } from "./_migrateCertificateApi";
import { MIGRATE_CERTIFICATE_API_PATH } from "@bfmeta/transaction-maker-core";

export class ToAuthSignatureMigrateCertificateApi extends MigrateCertificateApi {
    readonly GENERATE_API_PATH = MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_TO_AUTH_SIGNATURE;

    async sendPostRequest(argv: TransactionMaker.CrossChain.AuthSignMigrateCertificateArgs, ip?: string) {
        try {
            const result = await this.networkHelper.createTransaction<TransactionMaker.Server.MigrateCertificateReturn>(this.GENERATE_API_PATH, argv, ip);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.MigrateCertificateReturn = {
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
