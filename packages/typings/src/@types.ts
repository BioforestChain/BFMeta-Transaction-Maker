export {};
import type {
    REQUEST_TYPE as _REQUEST_TYPE,
    SECRET_LANGUAGE_TYPE as _SECRET_LANGUAGE_TYPE,
    EXCHANGE_DIRECTION as _EXCHANGE_DIRECTION,
    SPECIAL_ASSET_TYPE as _SPECIAL_ASSET_TYPE,
    PARENT_ASSET_TYPE as _PARENT_ASSET_TYPE,
    GIFT_DISTRIBUTION_RULE as _GIFT_DISTRIBUTION_RULE,
    RECORD_OPERATION_TYPE as _RECORD_OPERATION_TYPE,
    RECORD_TYPE as _RECORD_TYPE,
    LOCATION_NAME_OPERATION_TYPE as _LOCATION_NAME_OPERATION_TYPE,
    DAPP_TYPE as _DAPP_TYPE,
    NEW_TRANSACTION_REFUSE_REASON as _NEW_TRANSACTION_REFUSE_REASON,
    BNID_TYPE as _BNID_TYPE,
    LOGGER_LEVEL as _LOGGER_LEVEL,
    MACRO_INPUT_TYPE as _MACRO_INPUT_TYPE,
    MACRO_NUMBER_FORMAT as _MACRO_NUMBER_FORMAT,
    CERTIFICATE_TYPE as _CERTIFICATE_TYPE,
} from "./constants";
declare global {
    export namespace TransactionMaker {
        export type REQUEST_TYPE = _REQUEST_TYPE;
        export type SECRET_LANGUAGE_TYPE = _SECRET_LANGUAGE_TYPE;

        export type EXCHANGE_DIRECTION = _EXCHANGE_DIRECTION;
        export type SPECIAL_ASSET_TYPE = _SPECIAL_ASSET_TYPE;
        export type PARENT_ASSET_TYPE = _PARENT_ASSET_TYPE;
        export type GIFT_DISTRIBUTION_RULE = _GIFT_DISTRIBUTION_RULE;
        export type RECORD_OPERATION_TYPE = _RECORD_OPERATION_TYPE;
        export type RECORD_TYPE = _RECORD_TYPE;
        export type LOCATION_NAME_OPERATION_TYPE = _LOCATION_NAME_OPERATION_TYPE;
        export type DAPP_TYPE = _DAPP_TYPE;
        export type NEW_TRANSACTION_REFUSE_REASON = _NEW_TRANSACTION_REFUSE_REASON;
        export type BNID_TYPE = _BNID_TYPE;
        export type LOGGER_LEVEL = _LOGGER_LEVEL;
        export type MACRO_INPUT_TYPE = _MACRO_INPUT_TYPE;
        export type MACRO_NUMBER_FORMAT = _MACRO_NUMBER_FORMAT;
        export type CERTIFICATE_TYPE = _CERTIFICATE_TYPE;

        export interface TransactionStorageJSON {
            /**事件的索引键，提供额外查询使用的字段名 */
            key: string;
            /**事件的索引值，提供额外查询使用的字段值 */
            value: string;
        }

        export interface TransactionJSON<AssetJSON extends object = any> {
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

        export interface MigrateCertificateBodyJSON {
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

        export interface MigrateCertificateJSON {
            /**凭证信息 */
            body: MigrateCertificateBodyJSON;
            /**发起账户签名 version/publicKey-signature/secondPublicKey-signSignature */
            signature: string;
            /**迁出链的授权签名 version/publicKey-signature/secondPublicKey-signSignature */
            fromAuthSignature: string;
            /**迁入链的授权签名 version/publicKey-signature/secondPublicKey-signSignature */
            toAuthSignature: string;
        }

        export type RegisterChainBlockInfoJSON = {
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
            /**创世锻造者数量 */
            delegates?: number;
            /**区块间隔 */
            forgeInterval: number;
            /**创世锻造者列表 */
            genesisDelegates: {
                /**创世锻造者地址 */
                address: string;
                /**创世锻造者公钥 */
                publicKey: string;
            }[];
        };
        export type RegisterChainCertificateBodyJSON = {
            /**凭证版本 */
            version: string;
            /**迁出凭证生成时间 Date.now().getTimes() */
            timestamp: number;
            /**创世块信息 */
            genesisBlockInfo: RegisterChainBlockInfoJSON;
        };
        export type RegisterChainCertificateWithoutSignatureJSON = {
            /**凭证信息 */
            body: RegisterChainCertificateBodyJSON;
            /**链创世账户密钥生成的公钥 */
            publicKey: string;
            /**链创世账户安全密钥生成的公钥 */
            secondPublicKey?: string;
        };
        export interface RegisterChainCertificateJSON extends RegisterChainCertificateWithoutSignatureJSON {
            /**链创世账户公钥生成的签名 */
            signature: string;
            /**链创世账户安全公钥生成的签名 */
            signSignature?: string;
        }

        export interface FractionJSON<T extends number | bigint | string = number> {
            /**分子 */
            numerator: T;
            /**分母 */
            denominator: T;
        }

        export namespace Macro {
            export interface BaseInputJSON<T extends MACRO_INPUT_TYPE> {
                type: T;
                name: string;
                keyPath: string;
                /**regexp */
                pattern?: string;
                /**array */
                repeat?: boolean;
            }
            export interface TextInputJSON<T extends MACRO_INPUT_TYPE = _MACRO_INPUT_TYPE.TEXT> extends BaseInputJSON<T> {}
            export interface AddressInputJSON<T extends MACRO_INPUT_TYPE = _MACRO_INPUT_TYPE.ADDRESS> extends TextInputJSON<T> {}
            export interface PublicKeyInputJSON<T extends MACRO_INPUT_TYPE = _MACRO_INPUT_TYPE.PUBLICKEY> extends TextInputJSON<T> {}
            export interface SignatureInputJSON<T extends MACRO_INPUT_TYPE = _MACRO_INPUT_TYPE.SIGNATURE> extends TextInputJSON<T> {}
            export interface NumberInputJSON<T extends MACRO_INPUT_TYPE = _MACRO_INPUT_TYPE.NUMBER> extends BaseInputJSON<T> {
                base?: FractionJSON<string>;
                min?: FractionJSON<string>;
                max?: FractionJSON<string>;
                step?: FractionJSON<string>;
                format?: MACRO_NUMBER_FORMAT;
            }
            export interface CalcInputJSON extends NumberInputJSON<_MACRO_INPUT_TYPE.CALC> {
                calc: string;
            }

            export type InputJSON = TextInputJSON | AddressInputJSON | PublicKeyInputJSON | SignatureInputJSON | NumberInputJSON | CalcInputJSON;
        }

        export type IpInfo = {
            ip?: string;
            nodeIp?: string;
        };
    }
}
