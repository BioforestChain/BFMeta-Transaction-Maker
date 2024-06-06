export {};
import type { COMMON_API_PATH as _COMMON_API_PATH } from "./constants";
declare global {
    export namespace TransactionMaker {
        export namespace Common {
            export type COMMON_API_PATH = _COMMON_API_PATH;

            export interface CommonParams {}

            export interface VerifyAddressParams extends CommonParams {
                /**账户地址 */
                address: string;
            }

            export interface VerifyPublicKeyParams extends CommonParams {
                /**账户公钥 */
                publicKey: string;
            }

            export interface GenerateAccountParams extends CommonParams {
                /**密钥 */
                secret: string;
                /**安全密钥 */
                secondSecret?: string;
            }

            export interface GenerateAddressBySecretParams extends CommonParams {
                /**密钥 */
                secret: string;
            }

            export interface GenerateAddressByPublicKeyParams extends CommonParams {
                /**账户公钥 */
                publicKey: string;
            }

            export interface AccountInfo {
                /**账户地址 */
                address: string;
                /**账户公钥 */
                publicKey: string;
                /**账户安全公钥 */
                secondPublicKey?: string;
            }

            export interface AsymmetricEncryptParams extends CommonParams {
                /**要加密的信息 */
                msg: string;
                /**用于加密的公钥 */
                decryptPK: string;
                /**用于加密的私钥 */
                encryptSK: string;
            }

            export interface AsymmetricDecryptParams extends CommonParams {
                /**要解密的信息 */
                encryptedMessage: string;
                /**用于解密的公钥 */
                encryptPK: string;
                /**用于解密的私钥 */
                decryptSK: string;
                nonce?: string;
            }

            export interface AsymmetricEncrypt {
                nonce: string;
                encryptedMessage: string;
            }

            export type AsymmetricDecrypt = false | string;

            export interface GenerateKeypairParams extends CommonParams {
                /**密钥 */
                secret: string;
                /**安全密钥 */
                secondSecret?: string;
            }

            export interface Keypairs {
                keypair: {
                    publicKey: string;
                    secretKey: string;
                };
                secondKeypair?: {
                    publicKey: string;
                    secretKey: string;
                };
            }

            export interface CalcTransactionMinFeeParams extends CommonParams {
                /**完整的事件 */
                transaction: TransactionJSON;
                /**自定义的最低手续费 */
                customMinFeePerByte?: FractionJSON;
            }

            export interface TransactionMinFee {
                minFee: string;
            }

            export interface GenerateCiphertextSignatureParams extends CommonParams {
                /**加密密钥 */
                secret: string;
                /**关联事件的签名 */
                transactionSignature: string;
                /**事件的发起账户地址 */
                senderId: string;
            }

            export interface GenerateBlobSeedParams extends CommonParams {
                /**加密密钥 */
                hash: string;
                /**关联事件的签名 */
                size: number;
            }

            export interface TimeCorrectingParams extends CommonParams {
                /**目标节点 ip */
                ip?: string;
            }

            export interface MaybePeerInfoParams extends CommonParams {
                /**目标节点 ip */
                ip?: string;
            }

            export interface MaybePeerInfo {
                timestamp: number;
                maybeHeight: number;
            }

            export interface GenerateRegisterChainCertificateParams extends CommonParams {
                /**创建账户密钥 */
                generatorSecret: string;
                /**创建账户安全密钥 */
                generatorSecondSecret?: string;
                /**凭证版本号 */
                version?: string;
                /**迁出凭证生成时间 Date.now().getTimes() */
                timestamp?: number;
                /**创世块信息 */
                genesisBlockInfo: {
                    /**链创世块签名 */
                    genesisBlockSignature: string;
                    /**链名 */
                    chainName: string;
                    /**链主权益名 */
                    assetType: string;
                    /**链网络标识符 */
                    magic: string;
                    /**链网络类型，只能是 'b' 或 'c'，b 为正式网络，c 为测试网络 */
                    bnid: TransactionMaker.BNID_TYPE;
                    /**链创世时间 */
                    beginEpochTime: number;
                    /**链创世位名 */
                    genesisLocationName: string;
                    /**每轮的区块数量 */
                    blockPerRound: number;
                    /**区块间隔 */
                    forgeInterval: number;
                    /**创世锻造者列表 */
                    genesisGenerators: {
                        /**创世锻造者地址 */
                        address: string;
                        /**创世锻造者公钥 */
                        publicKey: string;
                    }[];
                };
            }

            export interface TransactionMakerInfo {
                /**服务的版本号 */
                version: string;
                /**核心版本号 */
                coreVersion: string;
                /**支持链 */
                supportChain: string;
            }

            export interface CalcGrabbedAssetNumberParams extends CommonParams {
                /**接受赠送的用户 id */
                grabberId: string;
                /**礼物所在的区块 id */
                blockSignature: string;
                /**礼物的 id */
                giftId: string;
                /**赠送者的 id */
                giverId: string;
                /**赠送的数量 */
                amount: string;
                /**赠送的数量 */
                totalGrabableTimes: number;
                /**赠送规则 */
                giftDistributionRule: GIFT_DISTRIBUTION_RULE;
            }

            export interface ParseToMacroCallInputsParams extends CommonParams {
                /**完整的 input */
                inputs: { [name: string]: any };
            }

            export interface MacroCallInputs {
                [name: string]: string;
            }
        }
    }
}
