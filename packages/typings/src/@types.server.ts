export {};
declare global {
    export namespace TransactionMaker {
        export namespace Server {
            export interface GenesisInfoConfig {
                /**创世块路径 */
                genesisBlockPath: string;
                /**创世块授权文件路径 */
                genesisBlockLicensePath: string;
            }
            export type GenesisInfoConfigOptions = Partial<GenesisInfoConfig>;

            export type LoggerConfig = {
                /**日志等级，info warn debug error，默认 error */
                level: LOGGER_LEVEL;
                /**单文件日志大小 mb */
                limit: number;
                /**日志保留份数 */
                backup: number;
                /**根据时间切割 */
                dateExpire: boolean;
                /**日志滚动时间 天 */
                daysToRotate: number;
            };
            export type LoggerConfigOptions = Partial<LoggerConfig>;

            export type Config = {
                /**启动的进程数 */
                numberOfWorkers: number;
                /**服务监听的端口号 */
                port: number;
                /**日志配置 */
                loggerConfig: LoggerConfig;
                /**可用的链节点列表 */
                chainNodeIps: string[];
                /**广播事件超时时间 */
                broadcastTimeout: number;
                /**创世块配置信息 */
                genesisInfoConfig: GenesisInfoConfig;
                /**密码类型: cn 汉语 || jp 日语 || sp 西班牙语 || it 意大利语 || fr 法语 || en 英语, 默认值 en */
                lang: SECRET_LANGUAGE_TYPE;
            };

            export type ConfigOptions = {
                /**启动的进程数 */
                numberOfWorkers?: number;
                /**服务监听的端口号 */
                port?: number;
                /**日志配置 */
                loggerConfig?: LoggerConfigOptions;
                /**可用的链节点列表 */
                chainNodeIps?: string[];
                /**广播事件超时时间 */
                broadcastTimeout?: number;
                /**创世块配置信息 */
                genesisInfoConfig?: GenesisInfoConfigOptions;
                /**密码类型: cn 汉语 || jp 日语 || sp 西班牙语 || it 意大利语 || fr 法语 || en 英语, 默认值 en */
                lang?: SECRET_LANGUAGE_TYPE;
            };

            export type GenerateTransactionSuccessReturn<T extends object> = {
                success: true;
                result: T;
            };
            export type GenerateTransactionFailureReturn = {
                success: false;
                error: {
                    code: string;
                    message: string;
                    description?: string;
                };
            };
            export type GenerateTransactionReturn<T extends TransactionJSON> = GenerateTransactionFailureReturn | GenerateTransactionSuccessReturn<T>;

            export type MigrateCertificateSuccessReturn = {
                success: true;
                result: MigrateCertificateJSON;
            };
            export type MigrateCertificateFailureReturn = GenerateTransactionFailureReturn;
            export type MigrateCertificateReturn = MigrateCertificateFailureReturn | MigrateCertificateSuccessReturn;

            export type CommonSuccessReturn<T> = {
                success: true;
                result: T;
            };
            export type CommonFailureReturn = GenerateTransactionFailureReturn;
            export type CommonReturn<T> = CommonFailureReturn | CommonSuccessReturn<T>;

            export type BroadcastTransactionResponse = {
                /**事件的 id */
                signature: string;
                /**事件广播状态 */
                status: string;
                /**事件的接收状态 */
                newTrsStatus: string;
                /**最低手续费 */
                minFee: string;
                /**拒绝的错误码 */
                refuseReason?: TransactionMaker.NEW_TRANSACTION_REFUSE_REASON;
                /**错误码 */
                errorCode?: string;
                /**错误信息 */
                errorMessage?: string;
            };
            export type BroadcastTransactionSuccessReturn = {
                success: true;
                result: BroadcastTransactionResponse;
            };
            export type BroadcastTransactionFailureReturn = GenerateTransactionFailureReturn;
            export type BroadcastTransactionReturn = BroadcastTransactionFailureReturn | BroadcastTransactionSuccessReturn;
        }
    }
}
