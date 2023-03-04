declare namespace TransactionMaker {
    namespace Common {
        type COMMON_API_PATH = import("./constants").COMMON_API_PATH;

        interface CommonParams {}

        interface VerifyAddressParams extends CommonParams {
            /**账户地址 */
            address: string;
        }

        interface VerifyPublicKeyParams extends CommonParams {
            /**账户公钥 */
            publicKey: string;
        }

        interface GenerateAccountParams extends CommonParams {
            /**密钥 */
            secret: string;
            /**安全密钥 */
            secondSecret?: string;
        }

        interface GenerateAddressBySecretParams extends CommonParams {
            /**密钥 */
            secret: string;
        }

        interface GenerateAddressByPublicKeyParams extends CommonParams {
            /**账户公钥 */
            publicKey: string;
        }

        interface AccountInfo {
            /**账户地址 */
            address: string;
            /**账户公钥 */
            publicKey: string;
            /**账户安全公钥 */
            secondPublicKey?: string;
        }

        interface AsymmetricEncryptParams extends CommonParams {
            /**要加密的信息 */
            msg: string;
            /**用于加密的公钥 */
            decryptPK: string;
            /**用于加密的私钥 */
            encryptSK: string;
        }

        interface AsymmetricDecryptParams extends CommonParams {
            /**要解密的信息 */
            encryptedMessage: string;
            /**用于解密的公钥 */
            encryptPK: string;
            /**用于解密的私钥 */
            decryptSK: string;
            nonce?: string;
        }

        interface AsymmetricEncrypt {
            nonce: string;
            encryptedMessage: string;
        }

        type AsymmetricDecrypt = false | string;

        interface GenerateKeypairParams extends CommonParams {
            /**密钥 */
            secret: string;
            /**安全密钥 */
            secondSecret?: string;
        }

        interface Keypairs {
            keypair: {
                publicKey: string;
                secretKey: string;
            };
            secondKeypair?: {
                publicKey: string;
                secretKey: string;
            };
        }

        interface FractionJSON<T extends number | bigint | string = number> {
            /**分子 */
            numerator: T;
            /**分母 */
            denominator: T;
        }

        interface CalcTransactionMinFeeParams extends CommonParams {
            /**完整的事件 */
            transaction: TransactionJSON;
            /**自定义的最低手续费 */
            customMinFeePerByte?: FractionJSON;
        }

        interface TransactionMinFee {
            minFee: string;
        }

        interface GenerateCiphertextSignatureParams extends CommonParams {
            /**加密密钥 */
            secret: string;
            /**关联交易的签名 */
            transactionSignature: string;
            /**交易的发起账户地址 */
            senderId: string;
        }

        interface GenerateBlobSeedParams extends CommonParams {
            /**加密密钥 */
            hash: string;
            /**关联交易的签名 */
            size: number;
        }

        interface TimeCorrectingParams extends CommonParams {
            /**目标节点 ip */
            ip?: string;
        }

        interface MaybeHeightParams extends CommonParams {
            /**目标节点 ip */
            ip?: string;
        }

        interface GenerateRegisterChainCertificateParams extends CommonParams {
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
                /**创世受托人数量 */
                delegates: number;
                /**区块间隔 */
                forgeInterval: number;
                /**创世受托人列表 */
                genesisDelegates: {
                    /**创世受托人地址 */
                    address: string;
                    /**创世受托人公钥 */
                    publicKey: string;
                }[];
            };
        }
    }
}
