import {
    VerifyAddressApi,
    VerifyPublicKeyApi,
    GenerateKeypairApi,
    GenerateAccountApi,
    GenerateAddressBySecretApi,
    GenerateAddressByPublicKeyApi,
    AsymmetricEncryptApi,
    AsymmetricDecryptApi,
    CalcTransactionMinFeeApi,
    GenerateCiphertextSignatureApi,
    GenerateBlobSeedApi,
    TimeCorrectingApi,
    MaybeHeightApi,
    GenerateRegisterChainCertificateApi,
    TransactionMakerInfoApi,
} from "./atom_common";

import { COMMON_API_PATH } from "@bfmeta/transaction-maker-core";

export class CommonApi {
    private __COMMON_API_MAP = new Map<TransactionMaker.Common.COMMON_API_PATH, TransactionMaker.Common.CommonApi>();

    constructor(private __networkHelper: TransactionMaker.NetworkHelper) {
        this.__init();
    }

    private __init() {
        const { __networkHelper: networkHelper, __COMMON_API_MAP: COMMON_API_MAP } = this;

        const verifyAddressApi = new VerifyAddressApi(networkHelper);
        const verifyPublicKeyApi = new VerifyPublicKeyApi(networkHelper);
        const generateKeypairApi = new GenerateKeypairApi(networkHelper);
        const generateAccountApi = new GenerateAccountApi(networkHelper);
        const generateAddressBySecretApi = new GenerateAddressBySecretApi(networkHelper);
        const generateAddressByPublicKeyApi = new GenerateAddressByPublicKeyApi(networkHelper);
        const asymmetricEncryptApi = new AsymmetricEncryptApi(networkHelper);
        const asymmetricDecryptApi = new AsymmetricDecryptApi(networkHelper);
        const calcTransactionMinFeeApi = new CalcTransactionMinFeeApi(networkHelper);
        const generateCiphertextSignatureApi = new GenerateCiphertextSignatureApi(networkHelper);
        const generateBlobSeedApi = new GenerateBlobSeedApi(networkHelper);
        const timeCorrectingApi = new TimeCorrectingApi(networkHelper);
        const maybeHeightApi = new MaybeHeightApi(networkHelper);
        const generateRegisterChainCertificateApi = new GenerateRegisterChainCertificateApi(networkHelper);
        const transactionMakerInfoApi = new TransactionMakerInfoApi(networkHelper);

        COMMON_API_MAP.set(verifyAddressApi.EXEC_API_PATH, verifyAddressApi);
        COMMON_API_MAP.set(verifyPublicKeyApi.EXEC_API_PATH, verifyPublicKeyApi);
        COMMON_API_MAP.set(generateKeypairApi.EXEC_API_PATH, generateKeypairApi);
        COMMON_API_MAP.set(generateAccountApi.EXEC_API_PATH, generateAccountApi);
        COMMON_API_MAP.set(generateAddressBySecretApi.EXEC_API_PATH, generateAddressBySecretApi);
        COMMON_API_MAP.set(generateAddressByPublicKeyApi.EXEC_API_PATH, generateAddressByPublicKeyApi);
        COMMON_API_MAP.set(asymmetricEncryptApi.EXEC_API_PATH, asymmetricEncryptApi);
        COMMON_API_MAP.set(asymmetricDecryptApi.EXEC_API_PATH, asymmetricDecryptApi);
        COMMON_API_MAP.set(calcTransactionMinFeeApi.EXEC_API_PATH, calcTransactionMinFeeApi);
        COMMON_API_MAP.set(generateCiphertextSignatureApi.EXEC_API_PATH, generateCiphertextSignatureApi);
        COMMON_API_MAP.set(generateBlobSeedApi.EXEC_API_PATH, generateBlobSeedApi);
        COMMON_API_MAP.set(timeCorrectingApi.EXEC_API_PATH, timeCorrectingApi);
        COMMON_API_MAP.set(maybeHeightApi.EXEC_API_PATH, maybeHeightApi);
        COMMON_API_MAP.set(generateRegisterChainCertificateApi.EXEC_API_PATH, generateRegisterChainCertificateApi);
        COMMON_API_MAP.set(transactionMakerInfoApi.EXEC_API_PATH, transactionMakerInfoApi);

        Object.freeze(COMMON_API_MAP);
    }

    // #region common
    private __getCommonApi<T extends TransactionMaker.Common.CommonApi>(apiPath: TransactionMaker.Common.COMMON_API_PATH) {
        return this.__COMMON_API_MAP.get(apiPath) as T;
    }

    /**是否是一个地址 */
    async verifyAddress(argv: TransactionMaker.Common.VerifyAddressParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.VerifyAddressApi>(COMMON_API_PATH.VERIFY_ADDRESS);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**是否是一个公钥 */
    async verifyPublicKey(argv: TransactionMaker.Common.VerifyPublicKeyParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.VerifyPublicKeyApi>(COMMON_API_PATH.VERIFY_PUBLICKEY);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**创建账户 */
    async generateAccount(argv: TransactionMaker.Common.GenerateAccountParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateAccountApi>(COMMON_API_PATH.GENERATE_ACCOUNT);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**根据密钥获取账户 */
    async generateAddressBySecret(argv: TransactionMaker.Common.GenerateAddressBySecretParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateAddressBySecretApi>(COMMON_API_PATH.GENERATE_ADDRESS_BY_SECRET);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**根据公钥获取账户 */
    async generateAddressByPublicKey(argv: TransactionMaker.Common.GenerateAddressByPublicKeyParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateAddressByPublicKeyApi>(COMMON_API_PATH.GENERATE_ADDRESS_BY_PUBLICKEY);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**创建公私钥对 */
    async generateKeypair(argv: TransactionMaker.Common.GenerateKeypairParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateKeypairApi>(COMMON_API_PATH.GENERATE_KEYPAIR);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**非对称加密 */
    async asymmetricEncrypt(argv: TransactionMaker.Common.AsymmetricEncryptParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.AsymmetricEncryptApi>(COMMON_API_PATH.ASYMMETRIC_ENCRYPT);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**非对称解密 */
    async asymmetricDecrypt(argv: TransactionMaker.Common.AsymmetricDecryptParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.AsymmetricDecryptApi>(COMMON_API_PATH.ASYMMETRIC_DECRYPT);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**计算最低手续费 */
    async calcTransactionMinFee(argv: TransactionMaker.Common.CalcTransactionMinFeeParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.CalcTransactionMinFeeApi>(COMMON_API_PATH.CALC_TRANSACTION_MIN_FEE);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**创建加密签名 */
    async generateCiphertextSignature(argv: TransactionMaker.Common.GenerateCiphertextSignatureParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateCiphertextSignatureApi>(COMMON_API_PATH.GENERATE_CIPHERTEXT_SIGNATURE);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**创建 blob seed */
    async generateBlobSeed(argv: TransactionMaker.Common.GenerateBlobSeedParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateBlobSeedApi>(COMMON_API_PATH.GENERATE_BLOB_SEED);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**时间校正 */
    async timeCorrecting(argv: TransactionMaker.Common.TimeCorrectingParams = {}, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.TimeCorrectingApi>(COMMON_API_PATH.TIME_CORRECTING);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**获取节点可能的最新高度 */
    async maybeHeight(argv: TransactionMaker.Common.MaybeHeightParams = {}, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.MaybeHeightApi>(COMMON_API_PATH.MAYBE_HEIGHT);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**生成注册链凭证 */
    async generateRegisterChainCertificate(argv: TransactionMaker.Common.GenerateRegisterChainCertificateParams, ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.GenerateRegisterChainCertificateApi>(COMMON_API_PATH.GENERATE_REGISTER_CHAIN_CERTIFICATE);
        const result = await api.sendPostRequest(argv, ip);
        return result;
    }

    /**获取服务器的基础信息 */
    async transactionMakerInfo(ip?: string) {
        const api = this.__getCommonApi<TransactionMaker.Common.TransactionMakerInfoApi>(COMMON_API_PATH.TRANSACTION_MAKER_INFO);
        const result = await api.sendGetRequest(ip);
        return result;
    }
    // #endregion
}
