export abstract class MigrateCertificateApi {
    abstract readonly GENERATE_API_PATH: TransactionMaker.CrossChain.MIGRATE_CERTIFICATE_API_PATH;

    constructor(protected networkHelper: TransactionMaker.NetworkHelper) {}
}
