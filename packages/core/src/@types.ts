declare namespace TransactionMaker {
    type REQUEST_TYPE = import("./constants").REQUEST_TYPE;
    type SECRET_LANGUAGE_TYPE = import("./constants").SECRET_LANGUAGE_TYPE;

    type EXCHANGE_DIRECTION = import("./constants").EXCHANGE_DIRECTION;
    type SPECIAL_ASSET_TYPE = import("./constants").SPECIAL_ASSET_TYPE;
    type PARENT_ASSET_TYPE = import("./constants").PARENT_ASSET_TYPE;
    type GIFT_DISTRIBUTION_RULE = import("./constants").GIFT_DISTRIBUTION_RULE;
    type RECORD_OPERATION_TYPE = import("./constants").RECORD_OPERATION_TYPE;
    type RECORD_TYPE = import("./constants").RECORD_TYPE;
    type LOCATION_NAME_OPERATION_TYPE = import("./constants").LOCATION_NAME_OPERATION_TYPE;
    type DAPP_TYPE = import("./constants").DAPP_TYPE;
    type NEW_TRANSACTION_REFUSE_REASON = import("./constants").NEW_TRANSACTION_REFUSE_REASON;
    type BNID_TYPE = import("./constants").BNID_TYPE;
    type LOGGER_LEVEL = import("./constants").LOGGER_LEVEL;
    type MACRO_INPUT_TYPE = import("./constants").MACRO_INPUT_TYPE;
    type MACRO_NUMBER_FORMAT = import("./constants").MACRO_NUMBER_FORMAT;
    type CERTIFICATE_TYPE = import("./constants").CERTIFICATE_TYPE;

    interface TransactionStorageJSON {
        /**事件的索引键，提供额外查询使用的字段名 */
        key: string;
        /**事件的索引值，提供额外查询使用的字段值 */
        value: string;
    }

    interface TransactionJSON<AssetJSON extends object = any> {
        /**事件版本号 */
        version: number;
        /**事件类型 */
        type: string;
        /**事件的发起账户地址，base58 编码的 16 进制字符串 */
        senderId: string;
        /**事件的发起账户公钥，128 个字节的 16 进制字符串 */
        senderPublicKey: string;
        /**事件的发起账户安全公钥，128 个字节的 16 进制字符串 */
        senderSecondPublicKey?: string;
        /**事件的接收账户地址，base58 编码的 16 进制字符串 */
        recipientId?: string;
        /**事件的接收范围类型 */
        rangeType: 0 | 1 | 2 | 4;
        /**事件的接收范围 */
        range: string[];
        /**事件的手续费 */
        fee: string;
        /**事件的时间戳 */
        timestamp: number;
        /**事件所属的 dappid */
        dappid?: string;
        /**事件所属的位名 */
        lns?: string;
        /**事件的来源IP，IPv4或者IPv6，不包含头尾(例如: 127.0.0.1)，默认为空 */
        sourceIP?: string;
        /**事件的来源链网络标识符 */
        fromMagic: string;
        /**事件的去往链网络标识符 */
        toMagic: string;
        /**事件的发起高度 */
        applyBlockHeight: number;
        /**事件的有效高度 */
        effectiveBlockHeight: number;
        /**事件的签名 */
        signature: string;
        /**事件的安全签名 */
        signSignature?: string;
        /**事件的备注信息 */
        remark: {
            [key: string]: string;
        };
        /**实际事件部分 */
        asset: AssetJSON;
        /**事件的索引对象 */
        storage?: TransactionStorageJSON;
        /**事件的索引键，提供额外查询使用的字段名 */
        storageKey?: TransactionStorageJSON["key"];
        /**事件的索引值，提供额外查询使用的字段值 */
        storageValue?: TransactionStorageJSON["value"];
        /**事件 pow 噪点 */
        nonce: number;
    }

    interface MigrateCertificateBodyJSON {
        /**凭证版本 */
        version: string;
        /**发起人的唯一标识 version/address */
        fromId: string;
        /**接收人的唯一标识 version/address */
        toId: string;
        /**迁出凭证生成时间 Date.now().getTimes() */
        timestamp: number;
        /**迁出链的唯一标识 version+自定义格式，目前是 version/magic/chainName/genesisBlockSignature */
        fromChainId: string;
        /**迁入链的唯一标识 version+自定义格式，目前是 version/magic/chainName/genesisBlockSignature */
        toChainId: string;
        /**迁出的权益：version/parentAssetType/assetType */
        assetId: string;
        /**迁出的权益数量，0-9 组成并且不包含小数点，必须大于0 */
        assetPrealnum: string;
    }

    interface MigrateCertificateJSON {
        /**凭证信息 */
        body: MigrateCertificateBodyJSON;
        /**发起账户签名 version/publicKey-signature/secondPublicKey-signSignature */
        signature: string;
        /**迁出链的授权签名 version/publicKey-signature/secondPublicKey-signSignature */
        fromAuthSignature: string;
        /**迁入链的授权签名 version/publicKey-signature/secondPublicKey-signSignature */
        toAuthSignature: string;
    }

    type RegisterChainBlockInfoJSON = {
        /**创世账户 */
        genesisAccount: {
            /**创世账户公钥 */
            address: string;
            /**创世账户公钥 */
            publicKey: string;
        };
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
    type RegisterChainCertificateBodyJSON = {
        /**凭证版本 */
        version: string;
        /**迁出凭证生成时间 Date.now().getTimes() */
        timestamp: number;
        /**创世块信息 */
        genesisBlockInfo: RegisterChainBlockInfoJSON;
    };
    type RegisterChainCertificateWithoutSignatureJSON = {
        /**凭证信息 */
        body: RegisterChainCertificateBodyJSON;
        /**链创世账户密钥生成的公钥 */
        publicKey: string;
        /**链创世账户安全密钥生成的公钥 */
        secondPublicKey?: string;
    };
    interface RegisterChainCertificateJSON extends RegisterChainCertificateWithoutSignatureJSON {
        /**链创世账户公钥生成的签名 */
        signature: string;
        /**链创世账户安全公钥生成的签名 */
        signSignature?: string;
    }

    interface FractionJSON<T extends number | bigint | string = number> {
        /**分子 */
        numerator: T;
        /**分母 */
        denominator: T;
    }

    namespace Macro {
        interface BaseInputJSON<T extends MACRO_INPUT_TYPE> {
            type: T;
            name: string;
            keyPath: string;
            /**regexp */
            pattern?: string;
        }
        interface TextInputJSON<T extends MACRO_INPUT_TYPE = import("./constants").MACRO_INPUT_TYPE.TEXT> extends BaseInputJSON<T> {}
        interface AddressInputJSON<T extends MACRO_INPUT_TYPE = import("./constants").MACRO_INPUT_TYPE.ADDRESS> extends TextInputJSON<T> {}
        interface PublicKeyInputJSON<T extends MACRO_INPUT_TYPE = import("./constants").MACRO_INPUT_TYPE.PUBLICKEY> extends TextInputJSON<T> {}
        interface SignatureInputJSON<T extends MACRO_INPUT_TYPE = import("./constants").MACRO_INPUT_TYPE.SIGNATURE> extends TextInputJSON<T> {}
        interface NumberInputJSON<T extends MACRO_INPUT_TYPE = import("./constants").MACRO_INPUT_TYPE.NUMBER> extends BaseInputJSON<T> {
            base?: FractionJSON<string>;
            min?: FractionJSON<string>;
            max?: FractionJSON<string>;
            step?: FractionJSON<string>;
            format?: MACRO_NUMBER_FORMAT;
        }
        interface CalcInputJSON extends NumberInputJSON<import("./constants").MACRO_INPUT_TYPE.CALC> {
            calc: string;
        }

        type InputJSON = TextInputJSON | AddressInputJSON | SignatureInputJSON | NumberInputJSON | CalcInputJSON;
    }

    type IpInfo = {
        ip?: string;
        nodeIp?: string;
    };
}
