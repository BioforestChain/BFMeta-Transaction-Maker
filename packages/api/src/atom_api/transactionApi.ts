import {
    UsernameApi,
    SignatureApi,
    DelegateApi,
    AcceptVoteApi,
    RejectVoteApi,
    VoteApi,
    IssueAssetApi,
    TransferAssetApi,
    DestoryAssetApi,
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
    DestoryEntityApi,
    TransferAnyApi,
    GiftAnyApi,
    GrabAnyApi,
    ToExchangeAnyApi,
    BeExchangeAnyApi,
    IssueEntityMultiApi,
    ToExchangeAnyMultiApi,
    BeExchangeAnyMultiApi,
    RegisterChainApi,
    EmigrateAssetApi,
    ImmigrateAssetApi,
} from "./atom_transaction";

import { GENERATE_TRANSACTION_API_PATH } from "@bfmeta/transaction-maker-core";

export class TransactionApi {
    private __TRANSACTION_API_MAP = new Map<TransactionMaker.Transaction.GENERATE_TRANSACTION_API_PATH, TransactionMaker.Transaction.TransactionApi>();

    constructor(private __networkHelper: TransactionMaker.NetworkHelper) {
        this.__init();
    }

    private __init() {
        const { __networkHelper: networkHelper, __TRANSACTION_API_MAP: TRANSACTION_API_MAP } = this;

        const usernameApi = new UsernameApi(networkHelper);
        const signatureApi = new SignatureApi(networkHelper);
        const delegateApi = new DelegateApi(networkHelper);
        const acceptVoteApi = new AcceptVoteApi(networkHelper);
        const rejectVoteApi = new RejectVoteApi(networkHelper);
        const voteApi = new VoteApi(networkHelper);
        const issueAssetApi = new IssueAssetApi(networkHelper);
        const transferAssetApi = new TransferAssetApi(networkHelper);
        const destoryAssetApi = new DestoryAssetApi(networkHelper);
        const giftAssetApi = new GiftAssetApi(networkHelper);
        const grabAssetApi = new GrabAssetApi(networkHelper);
        const trustAssetApi = new TrustAssetApi(networkHelper);
        const signForAssetApi = new SignForAssetApi(networkHelper);
        const toExchangeAssetApi = new ToExchangeAssetApi(networkHelper);
        const beExchangeAssetApi = new BeExchangeAssetApi(networkHelper);
        const dAppApi = new DAppApi(networkHelper);
        const dAppPurchasingApi = new DAppPurchasingApi(networkHelper);
        const markApi = new MarkApi(networkHelper);
        const locationNameApi = new LocationNameApi(networkHelper);
        const setLnsManagerApi = new SetLnsManagerApi(networkHelper);
        const setLnsRecordValueApi = new SetLnsRecordValueApi(networkHelper);
        const toExchangeSpecialAssetApi = new ToExchangeSpecialAssetApi(networkHelper);
        const beExchangeSpecialAssetApi = new BeExchangeSpecialAssetApi(networkHelper);
        const issueEntityFactoryApi = new IssueEntityFactoryApi(networkHelper);
        const issueEntityFactoryV1Api = new IssueEntityFactoryV1Api(networkHelper);
        const issueEntityApi = new IssueEntityApi(networkHelper);
        const destoryEntityApi = new DestoryEntityApi(networkHelper);
        const transferAnyApi = new TransferAnyApi(networkHelper);
        const giftAnyApi = new GiftAnyApi(networkHelper);
        const grabAnyApi = new GrabAnyApi(networkHelper);
        const toExchangeAnyApi = new ToExchangeAnyApi(networkHelper);
        const beExchangeAnyApi = new BeExchangeAnyApi(networkHelper);
        const issueEntityMultiApi = new IssueEntityMultiApi(networkHelper);
        const toExchangeAnyMultiApi = new ToExchangeAnyMultiApi(networkHelper);
        const beExchangeAnyMultiApi = new BeExchangeAnyMultiApi(networkHelper);
        const registerChainApi = new RegisterChainApi(networkHelper);
        const emigrateAssetApi = new EmigrateAssetApi(networkHelper);
        const immigrateAssetApi = new ImmigrateAssetApi(networkHelper);

        TRANSACTION_API_MAP.set(usernameApi.GENERATE_API_PATH, usernameApi);
        TRANSACTION_API_MAP.set(signatureApi.GENERATE_API_PATH, signatureApi);
        TRANSACTION_API_MAP.set(delegateApi.GENERATE_API_PATH, delegateApi);
        TRANSACTION_API_MAP.set(acceptVoteApi.GENERATE_API_PATH, acceptVoteApi);
        TRANSACTION_API_MAP.set(rejectVoteApi.GENERATE_API_PATH, rejectVoteApi);
        TRANSACTION_API_MAP.set(voteApi.GENERATE_API_PATH, voteApi);
        TRANSACTION_API_MAP.set(issueAssetApi.GENERATE_API_PATH, issueAssetApi);
        TRANSACTION_API_MAP.set(transferAssetApi.GENERATE_API_PATH, transferAssetApi);
        TRANSACTION_API_MAP.set(destoryAssetApi.GENERATE_API_PATH, destoryAssetApi);
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
        TRANSACTION_API_MAP.set(destoryEntityApi.GENERATE_API_PATH, destoryEntityApi);
        TRANSACTION_API_MAP.set(toExchangeAnyApi.GENERATE_API_PATH, toExchangeAnyApi);
        TRANSACTION_API_MAP.set(beExchangeAnyApi.GENERATE_API_PATH, beExchangeAnyApi);
        TRANSACTION_API_MAP.set(transferAnyApi.GENERATE_API_PATH, transferAnyApi);
        TRANSACTION_API_MAP.set(giftAnyApi.GENERATE_API_PATH, giftAnyApi);
        TRANSACTION_API_MAP.set(grabAnyApi.GENERATE_API_PATH, grabAnyApi);
        TRANSACTION_API_MAP.set(issueEntityMultiApi.GENERATE_API_PATH, issueEntityMultiApi);
        TRANSACTION_API_MAP.set(toExchangeAnyMultiApi.GENERATE_API_PATH, toExchangeAnyMultiApi);
        TRANSACTION_API_MAP.set(beExchangeAnyMultiApi.GENERATE_API_PATH, beExchangeAnyMultiApi);
        TRANSACTION_API_MAP.set(registerChainApi.GENERATE_API_PATH, registerChainApi);
        TRANSACTION_API_MAP.set(emigrateAssetApi.GENERATE_API_PATH, emigrateAssetApi);
        TRANSACTION_API_MAP.set(immigrateAssetApi.GENERATE_API_PATH, immigrateAssetApi);

        Object.freeze(TRANSACTION_API_MAP);
    }

    // #region transaction
    private __getTransactionApi<T extends TransactionMaker.Transaction.TransactionApi>(apiPath: TransactionMaker.Transaction.GENERATE_TRANSACTION_API_PATH) {
        return this.__TRANSACTION_API_MAP.get(apiPath) as T;
    }

    /**???????????? */
    async broadcastTransaction(argv: TransactionMaker.Transaction.BroadcastTransactionParams) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.broadcastTransaction(argv);
        return result;
    }

    /**??????????????????????????? */
    async generateUsername(argv: TransactionMaker.Transaction.UsernameTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**??????????????????????????? */
    async sendUsername(argv: TransactionMaker.Transaction.UsernameTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.UsernameApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateSignature(argv: TransactionMaker.Transaction.SignatureTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGNATURE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendSignature(argv: TransactionMaker.Transaction.SignatureTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignatureApi>(GENERATE_TRANSACTION_API_PATH.TR_USERNAME);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**??????????????????????????? */
    async generateDelegate(argv: TransactionMaker.Transaction.DelegateTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**??????????????????????????? */
    async sendDelegate(argv: TransactionMaker.Transaction.DelegateTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DelegateApi>(GENERATE_TRANSACTION_API_PATH.TR_DELEGATE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateAcceptVote(argv: TransactionMaker.Transaction.AcceptVoteTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendAcceptVote(argv: TransactionMaker.Transaction.AcceptVoteTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.AcceptVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_ACCEPT_VOTE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateRejectVote(argv: TransactionMaker.Transaction.RejectVoteTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendRejectVote(argv: TransactionMaker.Transaction.RejectVoteTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RejectVoteApi>(GENERATE_TRANSACTION_API_PATH.TR_REJECT_VOTE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateVote(argv: TransactionMaker.Transaction.VoteTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendVote(argv: TransactionMaker.Transaction.VoteTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.VoteApi>(GENERATE_TRANSACTION_API_PATH.TR_VOTE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateIssueAsset(argv: TransactionMaker.Transaction.IssueAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendIssueAsset(argv: TransactionMaker.Transaction.IssueAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateTransferAsset(argv: TransactionMaker.Transaction.TransferAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendTransferAsset(argv: TransactionMaker.Transaction.TransferAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateDestoryAsset(argv: TransactionMaker.Transaction.DestoryAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestoryAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTORY_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendDestoryAsset(argv: TransactionMaker.Transaction.DestoryAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestoryAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTORY_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateGiftAsset(argv: TransactionMaker.Transaction.GiftAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendGiftAsset(argv: TransactionMaker.Transaction.GiftAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateGrabAsset(argv: TransactionMaker.Transaction.GrabAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendGrabAsset(argv: TransactionMaker.Transaction.GrabAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateTrustAsset(argv: TransactionMaker.Transaction.TrustAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendTrustAsset(argv: TransactionMaker.Transaction.TrustAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TrustAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TRUST_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateSignForAsset(argv: TransactionMaker.Transaction.SignForAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendSignForAsset(argv: TransactionMaker.Transaction.SignForAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SignForAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_SIGN_FOR_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateToExchangeAsset(argv: TransactionMaker.Transaction.ToExchangeAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendToExchangeAsset(argv: TransactionMaker.Transaction.ToExchangeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateBeExchangeAsset(argv: TransactionMaker.Transaction.BeExchangeAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendBeExchangeAsset(argv: TransactionMaker.Transaction.BeExchangeAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????? dapp ???????????? */
    async generateDApp(argv: TransactionMaker.Transaction.DAppTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????? dapp ???????????? */
    async sendDApp(argv: TransactionMaker.Transaction.DAppTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????? dapp ???????????? */
    async generateDAppPurchasing(argv: TransactionMaker.Transaction.DAppPurchasingTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????? dapp ???????????? */
    async sendDAppPurchasing(argv: TransactionMaker.Transaction.DAppPurchasingTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DAppPurchasingApi>(GENERATE_TRANSACTION_API_PATH.TR_DAPP_PURCHASING);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????? */
    async generateMark(argv: TransactionMaker.Transaction.MarkTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????? */
    async sendMark(argv: TransactionMaker.Transaction.MarkTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.MarkApi>(GENERATE_TRANSACTION_API_PATH.TR_MARK);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**????????????/????????????????????? */
    async generateLocationName(argv: TransactionMaker.Transaction.LocationNameTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**????????????/????????????????????? */
    async sendLocationName(argv: TransactionMaker.Transaction.LocationNameTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.LocationNameApi>(GENERATE_TRANSACTION_API_PATH.TR_LOCATION_NAME);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????????????????? */
    async generateSetLnsManager(argv: TransactionMaker.Transaction.SetLnsManagerTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????????????????? */
    async sendSetLnsManager(argv: TransactionMaker.Transaction.SetLnsManagerTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsManagerApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_MANAGER);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????????????????? */
    async generateSetLnsRecordValue(argv: TransactionMaker.Transaction.SetLnsRecordValueTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????????????????? */
    async sendSetLnsRecordValue(argv: TransactionMaker.Transaction.SetLnsRecordValueTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.SetLnsRecordValueApi>(GENERATE_TRANSACTION_API_PATH.TR_SET_LNS_RECORD_VALUE);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateToExchangeSpecialAsset(argv: TransactionMaker.Transaction.ToExchangeSpecialAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /*??????????????????????????? */
    async sendToExchangeSpecialAsset(argv: TransactionMaker.Transaction.ToExchangeSpecialAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateBeExchangeSpecialAsset(argv: TransactionMaker.Transaction.BeExchangeSpecialAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /*????????????????????????????????? */
    async sendBeExchangeSpecialAsset(argv: TransactionMaker.Transaction.BeExchangeSpecialAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeSpecialAssetApi>(
            GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_SPECIAL_ASSET
        );
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**??????????????????????????????????????? */
    async generateIssueEntityFactory(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**??????????????????????????????????????? */
    async sendIssueEntityFactory(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**??????????????????????????????????????? */
    async generateIssueEntityFactoryV1(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionV1Params, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**??????????????????????????????????????? */
    async sendIssueEntityFactoryV1(argv: TransactionMaker.Transaction.IssueEntityFactoryTransactionV1Params, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityFactoryV1Api>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_FACTORY_V1);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**????????????????????????????????? */
    async generateIssueEntity(argv: TransactionMaker.Transaction.IssueEntityTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**????????????????????????????????? */
    async sendIssueEntity(argv: TransactionMaker.Transaction.IssueEntityTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**????????????????????????????????? */
    async generateDestoryEntity(argv: TransactionMaker.Transaction.DestoryEntityTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestoryEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTORY_ENTITY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**????????????????????????????????? */
    async sendDestoryEntity(argv: TransactionMaker.Transaction.DestoryEntityTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.DestoryEntityApi>(GENERATE_TRANSACTION_API_PATH.TR_DESTORY_ENTITY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateToExchangeAny(argv: TransactionMaker.Transaction.ToExchangeAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendToExchangeAny(argv: TransactionMaker.Transaction.ToExchangeAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????????????????? */
    async generateBeExchangeAny(argv: TransactionMaker.Transaction.BeExchangeAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????????????????? */
    async sendBeExchangeAny(argv: TransactionMaker.Transaction.BeExchangeAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateTransferAny(argv: TransactionMaker.Transaction.TransferAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendTransferAny(argv: TransactionMaker.Transaction.TransferAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.TransferAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_TRANSFER_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????? */
    async generateGiftAny(argv: TransactionMaker.Transaction.GiftAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????? */
    async sendGiftAny(argv: TransactionMaker.Transaction.GiftAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GiftAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GIFT_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????????????????? */
    async generateGrabAny(argv: TransactionMaker.Transaction.GrabAnyTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????????????????? */
    async sendGrabAny(argv: TransactionMaker.Transaction.GrabAnyTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.GrabAnyApi>(GENERATE_TRANSACTION_API_PATH.TR_GRAB_ANY);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**????????????????????????????????????????????? */
    async generateIssueEntityMulti(argv: TransactionMaker.Transaction.IssueEntityMultiTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**????????????????????????????????????????????? */
    async sendIssueEntityMulti(argv: TransactionMaker.Transaction.IssueEntityMultiTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.IssueEntityMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_ISSUE_ENTITY_MULTI);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????????????????? */
    async generateToExchangeAnyMulti(argv: TransactionMaker.Transaction.ToExchangeAnyMultiTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????????????????? */
    async sendToExchangeAnyMulti(argv: TransactionMaker.Transaction.ToExchangeAnyMultiTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ToExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_TO_EXCHANGE_ANY_MULTI);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**?????????????????????????????????????????? */
    async generateBeExchangeAnyMulti(argv: TransactionMaker.Transaction.BeExchangeAnyMultiTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**?????????????????????????????????????????? */
    async sendBeExchangeAnyMulti(argv: TransactionMaker.Transaction.BeExchangeAnyMultiTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.BeExchangeAnyMultiApi>(GENERATE_TRANSACTION_API_PATH.TR_BE_EXCHANGE_ANY_MULTI);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**????????????????????? */
    async generateRegisterChain(argv: TransactionMaker.Transaction.RegisterChainTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**????????????????????? */
    async sendRegisterChain(argv: TransactionMaker.Transaction.RegisterChainTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.RegisterChainApi>(GENERATE_TRANSACTION_API_PATH.TR_REGISTER_CHAIN);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateEmigrateAsset(argv: TransactionMaker.Transaction.EmigrateAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendEmigrateAsset(argv: TransactionMaker.Transaction.EmigrateAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.EmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_EMIGRATE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }

    /**???????????????????????? */
    async generateImmigrateAsset(argv: TransactionMaker.Transaction.ImmigrateAssetTransactionParams, ip?: string) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.generateTransaction(argv, ip);
        return result;
    }
    /**???????????????????????? */
    async sendImmigrateAsset(argv: TransactionMaker.Transaction.ImmigrateAssetTransactionParams, ipInfo: TransactionMaker.IpInfo = {}) {
        const api = this.__getTransactionApi<TransactionMaker.Transaction.ImmigrateAssetApi>(GENERATE_TRANSACTION_API_PATH.TR_IMMIGRATE_ASSET);
        const result = await api.sendTransaction(argv, ipInfo);
        return result;
    }
    // #endregion
}
