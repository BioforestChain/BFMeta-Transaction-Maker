declare namespace TransactionMaker {
    namespace CrossChain {
        type MIGRATE_CERTIFICATE_API_PATH = import("./constants").MIGRATE_CERTIFICATE_API_PATH;

        interface ChainBaseInfo {
            /**链名 */
            chainName: string;
            /**链网络标识符 */
            magic: string;
            /**链创世块签名 */
            genesisBlockSignature: string;
        }

        interface AssetBaseInfo {
            /**资产所属类型 */
            parentAssetType: PARENT_ASSET_TYPE;
            /**资产名 */
            assetType: string;
        }

        interface GenerateMigrateCertificateArgs {
            /**申请账户密钥 */
            senderSecret: string;
            /**申请账户安全密钥 */
            senderSecondSecret?: string;
            /**接收账户 */
            recipientId: string;
            /**去往链信息 */
            toChainInfo: ChainBaseInfo;
            /**资产信息 */
            assetInfo: AssetBaseInfo;
            /**迁移的数量 */
            assetPrealnum: string;
        }

        interface GenerateMigrateCertificateParams extends Omit<CrossChain.GenerateMigrateCertificateArgs, "assetInfo"> {
            assetInfo?: {
                /**资产所属大类 */
                parentAssetType: PARENT_ASSET_TYPE;
                /**资产名 */
                assetType: string;
            };
        }

        interface AuthSignMigrateCertificateArgs {
            /**授权账户密钥 */
            authSecret: string;
            /**授权账户安全密钥 */
            authSecondSecret?: string;
            /**签名版本号 */
            version?: string;
            /**迁移凭证 */
            migrateCertificate: MigrateCertificateJSON;
        }

        type MigrateCertificateArgs = GenerateMigrateCertificateParams | AuthSignMigrateCertificateArgs;
    }
}
