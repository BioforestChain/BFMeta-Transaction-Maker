import { GenerateMigrateCertificateApi, FromAuthSignatureMigrateCertificateApi, ToAuthSignatureMigrateCertificateApi } from "./migrate_certificate";

import { MIGRATE_CERTIFICATE_API_PATH } from "@bfmeta/transaction-maker-core";

export class MigrateCertificateApi {
    private __MIGRATE_CERTIFICATE_API_MAP = new Map<
        TransactionMaker.CrossChain.MIGRATE_CERTIFICATE_API_PATH,
        TransactionMaker.CrossChain.MigrateCertificateApi
    >();

    constructor(private __networkHelper: TransactionMaker.NetworkHelper) {
        this.__init();
    }

    private __init() {
        const { __networkHelper: networkHelper, __MIGRATE_CERTIFICATE_API_MAP: MIGRATE_CERTIFICATE_API_MAP } = this;

        const generateMigrateCertificateApi = new GenerateMigrateCertificateApi(networkHelper);
        const fromAuthSignatureMigrateCertificateApi = new FromAuthSignatureMigrateCertificateApi(networkHelper);
        const toAuthSignatureMigrateCertificateApi = new ToAuthSignatureMigrateCertificateApi(networkHelper);

        MIGRATE_CERTIFICATE_API_MAP.set(generateMigrateCertificateApi.GENERATE_API_PATH, generateMigrateCertificateApi);
        MIGRATE_CERTIFICATE_API_MAP.set(fromAuthSignatureMigrateCertificateApi.GENERATE_API_PATH, fromAuthSignatureMigrateCertificateApi);
        MIGRATE_CERTIFICATE_API_MAP.set(toAuthSignatureMigrateCertificateApi.GENERATE_API_PATH, toAuthSignatureMigrateCertificateApi);

        Object.freeze(MIGRATE_CERTIFICATE_API_MAP);
    }

    // #region migrateCertificate
    private __getMigrateCertificateApi<T extends TransactionMaker.CrossChain.MigrateCertificateApi>(
        apiPath: TransactionMaker.CrossChain.MIGRATE_CERTIFICATE_API_PATH
    ) {
        return this.__MIGRATE_CERTIFICATE_API_MAP.get(apiPath) as T;
    }

    /**创建权益迁移凭证 */
    async generateMigrateCertificate(argv: TransactionMaker.CrossChain.GenerateMigrateCertificateParams, ip?: string) {
        const api = this.__getMigrateCertificateApi<TransactionMaker.CrossChain.GenerateMigrateCertificateApi>(
            MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_GENERATE
        );
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }
    /**创建权益迁移凭证的迁出授权签名 */
    async fromAuthSignatureMigrateCertificate(argv: TransactionMaker.CrossChain.AuthSignMigrateCertificateArgs, ip?: string) {
        const api = this.__getMigrateCertificateApi<TransactionMaker.CrossChain.FromAuthSignatureMigrateCertificateApi>(
            MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_FROM_AUTH_SIGNATURE
        );
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }
    /**创建权益迁移凭证的迁入授权签名 */
    async toAuthSignatureMigrateCertificate(argv: TransactionMaker.CrossChain.AuthSignMigrateCertificateArgs, ip?: string) {
        const api = this.__getMigrateCertificateApi<TransactionMaker.CrossChain.ToAuthSignatureMigrateCertificateApi>(
            MIGRATE_CERTIFICATE_API_PATH.MIGRATE_CERTIFICATE_TO_AUTH_SIGNATURE
        );
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }
    // #endregion
}
