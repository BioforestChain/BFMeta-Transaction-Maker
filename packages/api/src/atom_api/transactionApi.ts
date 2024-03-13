import {
    UsernameApi,
    SignatureApi,
    DelegateApi,
    AcceptVoteApi,
    RejectVoteApi,
    VoteApi,
    IssueAssetApi,
    TransferAssetApi,
    DestroyAssetApi,
    GiftAssetApi,
    GrabAssetApi,
    TrustAssetApi,
    SignForAssetApi,
    ToExchangeAssetApi,
    BeExchangeAssetApi,
    DAppApi,
    DAppPurchasingApi,
    MarkApi,
    LocationNameApi,
    SetLnsManagerApi,
    SetLnsRecordValueApi,
    ToExchangeSpecialAssetApi,
    BeExchangeSpecialAssetApi,
    IssueEntityFactoryApi,
    IssueEntityFactoryV1Api,
    IssueEntityApi,
    DestroyEntityApi,
    TransferAnyApi,
    GiftAnyApi,
    GrabAnyApi,
    ToExchangeAnyApi,
    BeExchangeAnyApi,
    IssueEntityMultiApi,
    ToExchangeAnyMultiApi,
    BeExchangeAnyMultiApi,
    ToExchangeAnyMultiAllApi,
    BeExchangeAnyMultiAllApi,
    RegisterChainApi,
    EmigrateAssetApi,
    ImmigrateAssetApi,
    MultipleApi,
    PromiseApi,
    PromiseResolveApi,
    MacroApi,
    MacroCallApi,
    IssueCertificateApi,
    DestroyCertificateApi,
    IncreaseAssetApi,
    StakeAssetApi,
    UnstakeAssetApi,
    UtilApi,
} from "./atom_transaction";

import { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-typings";

export class TransactionApi {
    private __TRANSACTION_API_MAP = new Map<TransactionMaker.Transaction.GENERATE_TRANSACTION_API_PATH, TransactionMaker.Transaction.TransactionApi>();

    constructor(private __networkHelper: TransactionMaker.NetworkHelper) {
        this.__init();
    }
    utilApi!: UtilApi;
    private __init() {
        const { __networkHelper: networkHelper, __TRANSACTION_API_MAP: TRANSACTION_API_MAP } = this;

        const utilApi = (this.utilApi = new UtilApi(networkHelper));
        const usernameApi = new UsernameApi(networkHelper, utilApi);
        const signatureApi = new SignatureApi(networkHelper, utilApi);
        const delegateApi = new DelegateApi(networkHelper, utilApi);
        const acceptVoteApi = new AcceptVoteApi(networkHelper, utilApi);
        const rejectVoteApi = new RejectVoteApi(networkHelper, utilApi);
        const voteApi = new VoteApi(networkHelper, utilApi);
        const issueAssetApi = new IssueAssetApi(networkHelper, utilApi);
        const transferAssetApi = new TransferAssetApi(networkHelper, utilApi);
        const destroyAssetApi = new DestroyAssetApi(networkHelper, utilApi);
        const giftAssetApi = new GiftAssetApi(networkHelper, utilApi);
        const grabAssetApi = new GrabAssetApi(networkHelper, utilApi);
        const trustAssetApi = new TrustAssetApi(networkHelper, utilApi);
        const signForAssetApi = new SignForAssetApi(networkHelper, utilApi);
        const toExchangeAssetApi = new ToExchangeAssetApi(networkHelper, utilApi);
        const beExchangeAssetApi = new BeExchangeAssetApi(networkHelper, utilApi);
        const dAppApi = new DAppApi(networkHelper, utilApi);
        const dAppPurchasingApi = new DAppPurchasingApi(networkHelper, utilApi);
        const markApi = new MarkApi(networkHelper, utilApi);
        const locationNameApi = new LocationNameApi(networkHelper, utilApi);
        const setLnsManagerApi = new SetLnsManagerApi(networkHelper, utilApi);
        const setLnsRecordValueApi = new SetLnsRecordValueApi(networkHelper, utilApi);
        const toExchangeSpecialAssetApi = new ToExchangeSpecialAssetApi(networkHelper, utilApi);
        const beExchangeSpecialAssetApi = new BeExchangeSpecialAssetApi(networkHelper, utilApi);
        const issueEntityFactoryApi = new IssueEntityFactoryApi(networkHelper, utilApi);
        const issueEntityFactoryV1Api = new IssueEntityFactoryV1Api(networkHelper, utilApi);
        const issueEntityApi = new IssueEntityApi(networkHelper, utilApi);
        const destroyEntityApi = new DestroyEntityApi(networkHelper, utilApi);
        const transferAnyApi = new TransferAnyApi(networkHelper, utilApi);
        const giftAnyApi = new GiftAnyApi(networkHelper, utilApi);
        const grabAnyApi = new GrabAnyApi(networkHelper, utilApi);
        const toExchangeAnyApi = new ToExchangeAnyApi(networkHelper, utilApi);
        const beExchangeAnyApi = new BeExchangeAnyApi(networkHelper, utilApi);
        const issueEntityMultiApi = new IssueEntityMultiApi(networkHelper, utilApi);
        const toExchangeAnyMultiApi = new ToExchangeAnyMultiApi(networkHelper, utilApi);
        const beExchangeAnyMultiApi = new BeExchangeAnyMultiApi(networkHelper, utilApi);
        const toExchangeAnyMultiAllApi = new ToExchangeAnyMultiAllApi(networkHelper, utilApi);
        const beExchangeAnyMultiAllApi = new BeExchangeAnyMultiAllApi(networkHelper, utilApi);
        const registerChainApi = new RegisterChainApi(networkHelper, utilApi);
        const emigrateAssetApi = new EmigrateAssetApi(networkHelper, utilApi);
        const immigrateAssetApi = new ImmigrateAssetApi(networkHelper, utilApi);
        const multipleApi = new MultipleApi(networkHelper, utilApi);
        const promiseApi = new PromiseApi(networkHelper, utilApi);
        const promiseResolveApi = new PromiseResolveApi(networkHelper, utilApi);
        const macroApi = new MacroApi(networkHelper, utilApi);
        const macroCallApi = new MacroCallApi(networkHelper, utilApi);
        const issueCertificateApi = new IssueCertificateApi(networkHelper, utilApi);
        const destroyCertificateApi = new DestroyCertificateApi(networkHelper, utilApi);
        const increaseAssetApi = new IncreaseAssetApi(networkHelper, utilApi);
        const stakeAssetApi = new StakeAssetApi(networkHelper, utilApi);
        const unstakeAssetApi = new UnstakeAssetApi(networkHelper, utilApi);

        TRANSACTION_API_MAP.set(usernameApi.GENERATE_API_PATH, usernameApi);
        TRANSACTION_API_MAP.set(signatureApi.GENERATE_API_PATH, signatureApi);
        TRANSACTION_API_MAP.set(delegateApi.GENERATE_API_PATH, delegateApi);
        TRANSACTION_API_MAP.set(acceptVoteApi.GENERATE_API_PATH, acceptVoteApi);
        TRANSACTION_API_MAP.set(rejectVoteApi.GENERATE_API_PATH, rejectVoteApi);
        TRANSACTION_API_MAP.set(voteApi.GENERATE_API_PATH, voteApi);
        TRANSACTION_API_MAP.set(issueAssetApi.GENERATE_API_PATH, issueAssetApi);
        TRANSACTION_API_MAP.set(transferAssetApi.GENERATE_API_PATH, transferAssetApi);
        TRANSACTION_API_MAP.set(destroyAssetApi.GENERATE_API_PATH, destroyAssetApi);
        TRANSACTION_API_MAP.set(giftAssetApi.GENERATE_API_PATH, giftAssetApi);
        TRANSACTION_API_MAP.set(grabAssetApi.GENERATE_API_PATH, grabAssetApi);
        TRANSACTION_API_MAP.set(trustAssetApi.GENERATE_API_PATH, trustAssetApi);
        TRANSACTION_API_MAP.set(signForAssetApi.GENERATE_API_PATH, signForAssetApi);
        TRANSACTION_API_MAP.set(toExchangeAssetApi.GENERATE_API_PATH, toExchangeAssetApi);
        TRANSACTION_API_MAP.set(beExchangeAssetApi.GENERATE_API_PATH, beExchangeAssetApi);
        TRANSACTION_API_MAP.set(dAppApi.GENERATE_API_PATH, dAppApi);
        TRANSACTION_API_MAP.set(dAppPurchasingApi.GENERATE_API_PATH, dAppPurchasingApi);
        TRANSACTION_API_MAP.set(markApi.GENERATE_API_PATH, markApi);
        TRANSACTION_API_MAP.set(locationNameApi.GENERATE_API_PATH, locationNameApi);
        TRANSACTION_API_MAP.set(setLnsManagerApi.GENERATE_API_PATH, setLnsManagerApi);
        TRANSACTION_API_MAP.set(setLnsRecordValueApi.GENERATE_API_PATH, setLnsRecordValueApi);
        TRANSACTION_API_MAP.set(toExchangeSpecialAssetApi.GENERATE_API_PATH, toExchangeSpecialAssetApi);
        TRANSACTION_API_MAP.set(beExchangeSpecialAssetApi.GENERATE_API_PATH, beExchangeSpecialAssetApi);
        TRANSACTION_API_MAP.set(issueEntityFactoryApi.GENERATE_API_PATH, issueEntityFactoryApi);
        TRANSACTION_API_MAP.set(issueEntityFactoryV1Api.GENERATE_API_PATH, issueEntityFactoryV1Api);
        TRANSACTION_API_MAP.set(issueEntityApi.GENERATE_API_PATH, issueEntityApi);
        TRANSACTION_API_MAP.set(destroyEntityApi.GENERATE_API_PATH, destroyEntityApi);
        TRANSACTION_API_MAP.set(toExchangeAnyApi.GENERATE_API_PATH, toExchangeAnyApi);
        TRANSACTION_API_MAP.set(beExchangeAnyApi.GENERATE_API_PATH, beExchangeAnyApi);
        TRANSACTION_API_MAP.set(transferAnyApi.GENERATE_API_PATH, transferAnyApi);
        TRANSACTION_API_MAP.set(giftAnyApi.GENERATE_API_PATH, giftAnyApi);
        TRANSACTION_API_MAP.set(grabAnyApi.GENERATE_API_PATH, grabAnyApi);
        TRANSACTION_API_MAP.set(issueEntityMultiApi.GENERATE_API_PATH, issueEntityMultiApi);
        TRANSACTION_API_MAP.set(toExchangeAnyMultiApi.GENERATE_API_PATH, toExchangeAnyMultiApi);
        TRANSACTION_API_MAP.set(beExchangeAnyMultiApi.GENERATE_API_PATH, beExchangeAnyMultiApi);
        TRANSACTION_API_MAP.set(toExchangeAnyMultiAllApi.GENERATE_API_PATH, toExchangeAnyMultiAllApi);
        TRANSACTION_API_MAP.set(beExchangeAnyMultiAllApi.GENERATE_API_PATH, beExchangeAnyMultiAllApi);
        TRANSACTION_API_MAP.set(registerChainApi.GENERATE_API_PATH, registerChainApi);
        TRANSACTION_API_MAP.set(emigrateAssetApi.GENERATE_API_PATH, emigrateAssetApi);
        TRANSACTION_API_MAP.set(immigrateAssetApi.GENERATE_API_PATH, immigrateAssetApi);
        TRANSACTION_API_MAP.set(multipleApi.GENERATE_API_PATH, multipleApi);
        TRANSACTION_API_MAP.set(promiseApi.GENERATE_API_PATH, promiseApi);
        TRANSACTION_API_MAP.set(promiseResolveApi.GENERATE_API_PATH, promiseResolveApi);
        TRANSACTION_API_MAP.set(macroApi.GENERATE_API_PATH, macroApi);
        TRANSACTION_API_MAP.set(macroCallApi.GENERATE_API_PATH, macroCallApi);
        TRANSACTION_API_MAP.set(issueCertificateApi.GENERATE_API_PATH, issueCertificateApi);
        TRANSACTION_API_MAP.set(destroyCertificateApi.GENERATE_API_PATH, destroyCertificateApi);
        TRANSACTION_API_MAP.set(increaseAssetApi.GENERATE_API_PATH, increaseAssetApi);
        TRANSACTION_API_MAP.set(stakeAssetApi.GENERATE_API_PATH, stakeAssetApi);
        TRANSACTION_API_MAP.set(unstakeAssetApi.GENERATE_API_PATH, unstakeAssetApi);

        Object.freeze(TRANSACTION_API_MAP);
    }

    // #region transaction
    private __getTransactionApi<T extends TransactionMaker.Transaction.TransactionApi>(apiPath: TransactionMaker.Transaction.GENERATE_TRANSACTION_API_PATH) {
        return this.__TRANSACTION_API_MAP.get(apiPath) as T;
    }

    /**生成签名事件 */
    async recombineTransaction(argv: TransactionMaker.Transaction.RecombineTransactionParams) {
        const result = await this.utilApi.recombineTransaction(argv);
        return result;
    }

    /**使用Macro生成事件 */
    async macroBuildTransaction(argv: TransactionMaker.Transaction.MacroBuildTransactionParams) {
        const result = await this.utilApi.macroBuildTransaction(argv);
        return result;
    }

    /**广播事件 */
    async broadcastTransaction(argv: TransactionMaker.Transaction.BroadcastTransactionParams) {
        const result = await this.utilApi.broadcastTransaction(argv);
        return result;
    }

    /**更改blob存储区域 */
    async changeBlobsPath(argv: TransactionMaker.Transaction.ChangeBlobsPathParams) {
        const result = await this.utilApi.changeBlobsPath(argv);
        return result;
    }

    /**创建设置用户名事件 */
    async generateUsername(argv: TransactionMaker.Transaction.UsernameTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送设置用户名事件 */
    async sendUsername(argv: TransactionMaker.Transaction.UsernameTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建设置安全密码事件 */
    async generateSignature(argv: TransactionMaker.Transaction.SignatureTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送设置安全密码事件 */
    async sendSignature(argv: TransactionMaker.Transaction.SignatureTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建注册受托人事件 */
    async generateDelegate(argv: TransactionMaker.Transaction.DelegateTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送注册受托人事件 */
    async sendDelegate(argv: TransactionMaker.Transaction.DelegateTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建开启收票事件 */
    async generateAcceptVote(argv: TransactionMaker.Transaction.AcceptVoteTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送开启收票事件 */
    async sendAcceptVote(argv: TransactionMaker.Transaction.AcceptVoteTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建关闭收票事件 */
    async generateRejectVote(argv: TransactionMaker.Transaction.RejectVoteTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送关闭收票事件 */
    async sendRejectVote(argv: TransactionMaker.Transaction.RejectVoteTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建治理投票事件 */
    async generateVote(argv: TransactionMaker.Transaction.VoteTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送治理投票事件 */
    async sendVote(argv: TransactionMaker.Transaction.VoteTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益发行事件 */
    async generateIssueAsset(argv: TransactionMaker.Transaction.IssueAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益发行事件 */
    async sendIssueAsset(argv: TransactionMaker.Transaction.IssueAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益转移事件 */
    async generateTransferAsset(argv: TransactionMaker.Transaction.TransferAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益转移事件 */
    async sendTransferAsset(argv: TransactionMaker.Transaction.TransferAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益销毁事件 */
    async generateDestroyAsset(argv: TransactionMaker.Transaction.DestroyAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestroyAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益销毁事件 */
    async sendDestroyAsset(argv: TransactionMaker.Transaction.DestroyAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestroyAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益赠送事件 */
    async generateGiftAsset(argv: TransactionMaker.Transaction.GiftAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益赠送事件 */
    async sendGiftAsset(argv: TransactionMaker.Transaction.GiftAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受权益赠送事件 */
    async generateGrabAsset(argv: TransactionMaker.Transaction.GrabAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送接受权益赠送事件 */
    async sendGrabAsset(argv: TransactionMaker.Transaction.GrabAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益委托事件 */
    async generateTrustAsset(argv: TransactionMaker.Transaction.TrustAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益委托事件 */
    async sendTrustAsset(argv: TransactionMaker.Transaction.TrustAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建签收权益委托事件 */
    async generateSignForAsset(argv: TransactionMaker.Transaction.SignForAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送签收权益委托事件 */
    async sendSignForAsset(argv: TransactionMaker.Transaction.SignForAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益交换事件 */
    async generateToExchangeAsset(argv: TransactionMaker.Transaction.ToExchangeAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益交换事件 */
    async sendToExchangeAsset(argv: TransactionMaker.Transaction.ToExchangeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受权益交换事件 */
    async generateBeExchangeAsset(argv: TransactionMaker.Transaction.BeExchangeAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送接受权益交换事件 */
    async sendBeExchangeAsset(argv: TransactionMaker.Transaction.BeExchangeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建 dapp 发行事件 */
    async generateDApp(argv: TransactionMaker.Transaction.DAppTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送 dapp 发行事件 */
    async sendDApp(argv: TransactionMaker.Transaction.DAppTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建 dapp 购买事件 */
    async generateDAppPurchasing(argv: TransactionMaker.Transaction.DAppPurchasingTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送 dapp 购买事件 */
    async sendDAppPurchasing(argv: TransactionMaker.Transaction.DAppPurchasingTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建存证事件 */
    async generateMark(argv: TransactionMaker.Transaction.MarkTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送存证事件 */
    async sendMark(argv: TransactionMaker.Transaction.MarkTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建注册/注销链域名事件 */
    async generateLocationName(argv: TransactionMaker.Transaction.LocationNameTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送注册/注销链域名事件 */
    async sendLocationName(argv: TransactionMaker.Transaction.LocationNameTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建设置链域名管理员事件 */
    async generateSetLnsManager(argv: TransactionMaker.Transaction.SetLnsManagerTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送设置链域名管理员事件 */
    async sendSetLnsManager(argv: TransactionMaker.Transaction.SetLnsManagerTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建设置链域名解析值事件 */
    async generateSetLnsRecordValue(argv: TransactionMaker.Transaction.SetLnsRecordValueTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送设置链域名解析值事件 */
    async sendSetLnsRecordValue(argv: TransactionMaker.Transaction.SetLnsRecordValueTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建资产交换事件 */
    async generateToExchangeSpecialAsset(argv: TransactionMaker.Transaction.ToExchangeSpecialAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /*发送建资产交换事件 */
    async sendToExchangeSpecialAsset(argv: TransactionMaker.Transaction.ToExchangeSpecialAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受资产交换事件 */
    async generateBeExchangeSpecialAsset(argv: TransactionMaker.Transaction.BeExchangeSpecialAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /*发送建接受资产交换事件 */
    async sendBeExchangeSpecialAsset(argv: TransactionMaker.Transaction.BeExchangeSpecialAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建发行非同质权益模板事件 */
    async generateIssueEntityFactory(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送发行非同质权益模板事件 */
    async sendIssueEntityFactory(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建发行非同质权益模板事件 */
    async generateIssueEntityFactoryV1(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionV1Params, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送发行非同质权益模板事件 */
    async sendIssueEntityFactoryV1(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionV1Params, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建发行非同质权益事件 */
    async generateIssueEntity(argv: TransactionMaker.Transaction.IssueEntityTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送发行非同质权益事件 */
    async sendIssueEntity(argv: TransactionMaker.Transaction.IssueEntityTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建销毁非同质权益事件 */
    async generateDestroyEntity(argv: TransactionMaker.Transaction.DestroyEntityTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestroyEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ENTITY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送销毁非同质权益事件 */
    async sendDestroyEntity(argv: TransactionMaker.Transaction.DestroyEntityTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestroyEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_ENTITY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建任意资产交换事件 */
    async generateToExchangeAny(argv: TransactionMaker.Transaction.ToExchangeAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送任意资产交换事件 */
    async sendToExchangeAny(argv: TransactionMaker.Transaction.ToExchangeAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受任意资产交换事件 */
    async generateBeExchangeAny(argv: TransactionMaker.Transaction.BeExchangeAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送接受任意资产交换事件 */
    async sendBeExchangeAny(argv: TransactionMaker.Transaction.BeExchangeAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建任意资产转移事件 */
    async generateTransferAny(argv: TransactionMaker.Transaction.TransferAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送任意资产转移事件 */
    async sendTransferAny(argv: TransactionMaker.Transaction.TransferAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建任意资产赠送事件 */
    async generateGiftAny(argv: TransactionMaker.Transaction.GiftAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送任意资产赠送事件 */
    async sendGiftAny(argv: TransactionMaker.Transaction.GiftAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受任意资产赠送事件 */
    async generateGrabAny(argv: TransactionMaker.Transaction.GrabAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送接受任意资产赠送事件 */
    async sendGrabAny(argv: TransactionMaker.Transaction.GrabAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建批量发行非同质权益模板事件 */
    async generateIssueEntityMulti(argv: TransactionMaker.Transaction.IssueEntityMultiTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送批量发行非同质权益模板事件 */
    async sendIssueEntityMulti(argv: TransactionMaker.Transaction.IssueEntityMultiTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建批量全量任意资产交换事件 */
    async generateToExchangeAnyMultiAll(argv: TransactionMaker.Transaction.ToExchangeAnyMultiAllTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyMultiAllApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI_ALL);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送批量全量任意资产交换事件 */
    async sendToExchangeAnyMultiAll(argv: TransactionMaker.Transaction.ToExchangeAnyMultiAllTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyMultiAllApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI_ALL);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受批量任意资产交换事件 */
    async generateBeExchangeAnyMultiAll(argv: TransactionMaker.Transaction.BeExchangeAnyMultiAllTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyMultiAllApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI_ALL);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送接受批量任意资产交换事件 */
    async sendBeExchangeAnyMultiAll(argv: TransactionMaker.Transaction.BeExchangeAnyMultiAllTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyMultiAllApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI_ALL);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建批量任意资产交换事件 */
    async generateToExchangeAnyMulti(argv: TransactionMaker.Transaction.ToExchangeAnyMultiTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送批量任意资产交换事件 */
    async sendToExchangeAnyMulti(argv: TransactionMaker.Transaction.ToExchangeAnyMultiTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建接受批量任意资产交换事件 */
    async generateBeExchangeAnyMulti(argv: TransactionMaker.Transaction.BeExchangeAnyMultiTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送接受批量任意资产交换事件 */
    async sendBeExchangeAnyMulti(argv: TransactionMaker.Transaction.BeExchangeAnyMultiTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建注册链事件 */
    async generateRegisterChain(argv: TransactionMaker.Transaction.RegisterChainTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送注册链事件 */
    async sendRegisterChain(argv: TransactionMaker.Transaction.RegisterChainTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益迁出事件 */
    async generateEmigrateAsset(argv: TransactionMaker.Transaction.EmigrateAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益迁出事件 */
    async sendEmigrateAsset(argv: TransactionMaker.Transaction.EmigrateAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建权益迁入事件 */
    async generateImmigrateAsset(argv: TransactionMaker.Transaction.ImmigrateAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送权益迁入事件 */
    async sendImmigrateAsset(argv: TransactionMaker.Transaction.ImmigrateAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建组合事件 */
    async generateMultiple(argv: TransactionMaker.Transaction.MultipleTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MultipleApi>(GENERATE_TRANSACTION_API_PATH.TR_MULTIPLE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送组合事件 */
    async sendMultiple(argv: TransactionMaker.Transaction.MultipleTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MultipleApi>(GENERATE_TRANSACTION_API_PATH.TR_MULTIPLE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建承诺事件 */
    async generatePromise(argv: TransactionMaker.Transaction.PromiseTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.PromiseApi>(GENERATE_TRANSACTION_API_PATH.TR_PROMISE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送承诺事件 */
    async sendPromise(argv: TransactionMaker.Transaction.PromiseTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.PromiseApi>(GENERATE_TRANSACTION_API_PATH.TR_PROMISE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建承诺兑现事件 */
    async generatePromiseResolve(argv: TransactionMaker.Transaction.PromiseResolveTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.PromiseResolveApi>(GENERATE_TRANSACTION_API_PATH.TR_PROMISE_RESOLVE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送承诺兑现事件 */
    async sendPromiseResolve(argv: TransactionMaker.Transaction.PromiseResolveTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.PromiseResolveApi>(GENERATE_TRANSACTION_API_PATH.TR_PROMISE_RESOLVE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建宏事件 */
    async generateMacro(argv: TransactionMaker.Transaction.MacroTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MacroApi>(GENERATE_TRANSACTION_API_PATH.TR_MACRO);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送宏事件 */
    async sendMacro(argv: TransactionMaker.Transaction.MacroTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MacroApi>(GENERATE_TRANSACTION_API_PATH.TR_MACRO);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建宏调用事件 */
    async generateMacroCall(argv: TransactionMaker.Transaction.MacroCallTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MacroCallApi>(GENERATE_TRANSACTION_API_PATH.TR_MACRO_CALL);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送宏调用事件 */
    async sendMacroCall(argv: TransactionMaker.Transaction.MacroCallTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MacroCallApi>(GENERATE_TRANSACTION_API_PATH.TR_MACRO_CALL);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建发行凭证事件 */
    async generateIssueCertificate(argv: TransactionMaker.Transaction.IssueCertificateTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_CERTIFICATE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送发行凭证事件 */
    async sendIssueCertificate(argv: TransactionMaker.Transaction.IssueCertificateTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_CERTIFICATE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建销毁凭证事件 */
    async generateDestroyCertificate(argv: TransactionMaker.Transaction.DestroyCertificateTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestroyCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_CERTIFICATE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送销毁凭证事件 */
    async sendDestroyCertificate(argv: TransactionMaker.Transaction.DestroyCertificateTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestroyCertificateApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTROY_CERTIFICATE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建增发权益事件 */
    async generateIncreaseAsset(argv: TransactionMaker.Transaction.IncreaseAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IncreaseAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_INCREASE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送增发权益事件 */
    async sendIncreaseAsset(argv: TransactionMaker.Transaction.IncreaseAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IncreaseAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_INCREASE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建质押权益事件 */
    async generateStakeAsset(argv: TransactionMaker.Transaction.StakeAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.StakeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_STAKE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送质押权益事件 */
    async sendStakeAsset(argv: TransactionMaker.Transaction.StakeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.StakeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_STAKE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**创建解除质押权益事件 */
    async generateUnstakeAsset(argv: TransactionMaker.Transaction.UnstakeAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.UnstakeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_UNSTAKE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**发送解除质押权益事件 */
    async sendUnstakeAsset(argv: TransactionMaker.Transaction.UnstakeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.UnstakeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_UNSTAKE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }
    // #endregion
}
