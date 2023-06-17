declare namespace TransactionMaker {
    namespace Transaction {
        type TransactionApi = import("./atom_transaction/_transactionApi")._TransactionApi<any>;
        type UsernameApi = import("./atom_transaction").UsernameApi;
        type SignatureApi = import("./atom_transaction").SignatureApi;
        type DelegateApi = import("./atom_transaction").DelegateApi;
        type AcceptVoteApi = import("./atom_transaction").AcceptVoteApi;
        type RejectVoteApi = import("./atom_transaction").RejectVoteApi;
        type VoteApi = import("./atom_transaction").VoteApi;

        type IssueAssetApi = import("./atom_transaction").IssueAssetApi;
        type TransferAssetApi = import("./atom_transaction").TransferAssetApi;
        type DestroyAssetApi = import("./atom_transaction").DestroyAssetApi;
        type GiftAssetApi = import("./atom_transaction").GiftAssetApi;
        type GrabAssetApi = import("./atom_transaction").GrabAssetApi;
        type TrustAssetApi = import("./atom_transaction").TrustAssetApi;
        type SignForAssetApi = import("./atom_transaction").SignForAssetApi;
        type ToExchangeAssetApi = import("./atom_transaction").ToExchangeAssetApi;
        type BeExchangeAssetApi = import("./atom_transaction").BeExchangeAssetApi;

        type DAppApi = import("./atom_transaction").DAppApi;
        type DAppPurchasingApi = import("./atom_transaction").DAppPurchasingApi;
        type MarkApi = import("./atom_transaction").MarkApi;
        type LocationNameApi = import("./atom_transaction").LocationNameApi;
        type SetLnsManagerApi = import("./atom_transaction").SetLnsManagerApi;
        type SetLnsRecordValueApi = import("./atom_transaction").SetLnsRecordValueApi;
        type ToExchangeSpecialAssetApi = import("./atom_transaction").ToExchangeSpecialAssetApi;
        type BeExchangeSpecialAssetApi = import("./atom_transaction").BeExchangeSpecialAssetApi;

        type IssueEntityFactoryApi = import("./atom_transaction").IssueEntityFactoryApi;
        type IssueEntityFactoryV1Api = import("./atom_transaction").IssueEntityFactoryV1Api;
        type IssueEntityApi = import("./atom_transaction").IssueEntityApi;
        type DestroyEntityApi = import("./atom_transaction").DestroyEntityApi;

        type ToExchangeAnyApi = import("./atom_transaction").ToExchangeAnyApi;
        type BeExchangeAnyApi = import("./atom_transaction").BeExchangeAnyApi;
        type TransferAnyApi = import("./atom_transaction").TransferAnyApi;
        type GiftAnyApi = import("./atom_transaction").GiftAnyApi;
        type GrabAnyApi = import("./atom_transaction").GrabAnyApi;

        type IssueEntityMultiApi = import("./atom_transaction").IssueEntityMultiApi;

        type ToExchangeAnyMultiApi = import("./atom_transaction").ToExchangeAnyMultiApi;
        type BeExchangeAnyMultiApi = import("./atom_transaction").BeExchangeAnyMultiApi;

        type ToExchangeAnyMultiAllApi = import("./atom_transaction").ToExchangeAnyMultiAllApi;
        type BeExchangeAnyMultiAllApi = import("./atom_transaction").BeExchangeAnyMultiAllApi;

        type RegisterChainApi = import("./atom_transaction").RegisterChainApi;
        type EmigrateAssetApi = import("./atom_transaction").EmigrateAssetApi;
        type ImmigrateAssetApi = import("./atom_transaction").ImmigrateAssetApi;

        type MultipleApi = import("./atom_transaction").MultipleApi;
        type PromiseApi = import("./atom_transaction").PromiseApi;
        type PromiseResolveApi = import("./atom_transaction").PromiseResolveApi;
        type MacroApi = import("./atom_transaction").MacroApi;
        type MacroCallApi = import("./atom_transaction").MacroCallApi;
        type IssueCertificateApi = import("./atom_transaction").IssueCertificateApi;
        type DestroyCertificateApi = import("./atom_transaction").DestroyCertificateApi;

        type UtilApi = import("./atom_transaction").UtilApi;
    }

    namespace CrossChain {
        type MigrateCertificateApi = import("./migrate_certificate/_migrateCertificateApi").MigrateCertificateApi;
        type GenerateMigrateCertificateApi = import("./migrate_certificate").GenerateMigrateCertificateApi;
        type FromAuthSignatureMigrateCertificateApi = import("./migrate_certificate").FromAuthSignatureMigrateCertificateApi;
        type ToAuthSignatureMigrateCertificateApi = import("./migrate_certificate").ToAuthSignatureMigrateCertificateApi;
    }

    namespace Common {
        type CommonApi = import("./atom_common/_commonApi").CommonApi<any>;
        type VerifyAddressApi = import("./atom_common").VerifyAddressApi;
        type VerifyPublicKeyApi = import("./atom_common").VerifyPublicKeyApi;
        type GenerateKeypairApi = import("./atom_common").GenerateKeypairApi;
        type GenerateAccountApi = import("./atom_common").GenerateAccountApi;
        type GenerateAddressBySecretApi = import("./atom_common").GenerateAddressBySecretApi;
        type GenerateAddressByPublicKeyApi = import("./atom_common").GenerateAddressByPublicKeyApi;
        type AsymmetricEncryptApi = import("./atom_common").AsymmetricEncryptApi;
        type AsymmetricDecryptApi = import("./atom_common").AsymmetricDecryptApi;
        type CalcTransactionMinFeeApi = import("./atom_common").CalcTransactionMinFeeApi;
        type GenerateCiphertextSignatureApi = import("./atom_common").GenerateCiphertextSignatureApi;
        type GenerateBlobSeedApi = import("./atom_common").GenerateBlobSeedApi;
        type TimeCorrectingApi = import("./atom_common").TimeCorrectingApi;
        type MaybeHeightApi = import("./atom_common").MaybeHeightApi;
        type GenerateRegisterChainCertificateApi = import("./atom_common").GenerateRegisterChainCertificateApi;
        type TransactionMakerInfoApi = import("./atom_common").TransactionMakerInfoApi;
    }
}
