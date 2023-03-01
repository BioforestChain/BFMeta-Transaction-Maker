declare namespace TransactionMaker {
    namespace Server {
        interface GenesisInfoConfig {
            /**创世块是否由外部提供, 默认在 genesisInfos 目录, 默认值 false */
            isGenesisBlockProvidedExternally: boolean;
            /**网络类型: testnet || mainnet, 默认值 mainnet */
            networkType: BLOCK_CHAIN_NET_WORK_TYPE;
            /**链名，默认值 bfchain */
            chainName: string;
            /**区块链链权益名, 默认值 BFT */
            chainAssetType: string;
            /**每轮的区块数量, 默认值 57 */
            blockPerRound: number;
            /**锻造区块的时间间隔, 默认值 128 */
            forgeInterval: number;
            /**创世块的根路径，如果 isGenesisBlockProvidedExternally，并且配置了 genesisBlockRootPath，则从此目录搜索创世块 */
            genesisBlockRootPath?: string;
        }

        type GenesisInfoConfigOptions = Partial<GenesisInfoConfig>;

        interface Config {
            /**服务监听的端口号 */
            port: number;
            /**可用的链节点列表 */
            chainNodeIps: string[];
            /**广播交易超时时间 */
            broadcastTimeout: number;
            /**创世块配置信息 */
            genesisInfoConfig: GenesisInfoConfig;
            /**密码类型: cn 汉语 || jp 日语 || sp 西班牙语 || it 意大利语 || fr 法语 || en 英语, 默认值 en */
            lang: SECRET_LANGUAGE_TYPE;
        }

        type ConfigOptions = {
            /**服务监听的端口号 */
            port?: number;
            /**可用的链节点列表 */
            chainNodeIps?: string[];
            /**广播交易超时时间 */
            broadcastTimeout?: number;
            /**创世块配置信息 */
            genesisInfoConfig?: GenesisInfoConfig;
            /**密码类型: cn 汉语 || jp 日语 || sp 西班牙语 || it 意大利语 || fr 法语 || en 英语, 默认值 en */
            lang?: SECRET_LANGUAGE_TYPE;
        };

        type GenerateTransactionSuccessReturn<T extends object> = {
            success: true;
            result: T;
        };
        type GenerateTransactionFailureReturn = {
            success: false;
            error: {
                code: string;
                message: string;
                description?: string;
            };
        };
        type GenerateTransactionReturn<T extends TransactionJSON> = GenerateTransactionFailureReturn | GenerateTransactionSuccessReturn<T>;

        type MigrateCertificateSuccessReturn = {
            success: true;
            result: MigrateCertificateJSON;
        };
        type MigrateCertificateFailureReturn = GenerateTransactionFailureReturn;
        type MigrateCertificateReturn = MigrateCertificateFailureReturn | MigrateCertificateSuccessReturn;

        type CommonSuccessReturn<T> = {
            success: true;
            result: T;
        };
        type CommonFailureReturn = GenerateTransactionFailureReturn;
        type CommonReturn<T> = CommonFailureReturn | CommonSuccessReturn<T>;

        type BroadcastTransactionResponse = {
            status: string;
            /**交易的接收状态 */
            newTrsStatus: string;
            /**最低手续费 */
            minFee: string;
            /**拒绝的错误码 */
            refuseReason?: TransactionMaker.NEW_TRANSACTION_REFUSE_REASON;
            /**错误码 */
            errorCode?: string;
        };
        type BroadcastTransactionSuccessReturn = {
            success: true;
            result: BroadcastTransactionResponse;
        };
        type BroadcastTransactionFailureReturn = GenerateTransactionFailureReturn;
        type BroadcastTransactionReturn = BroadcastTransactionFailureReturn | BroadcastTransactionSuccessReturn;
    }
}
