/**请求类型 */
export const enum REQUEST_TYPE {
    /**get 请求 */
    GET = "GET",
    /**post 请求 */
    POST = "POST",
}

/**主密钥的语言类型 */
export const enum SECRET_LANGUAGE_TYPE {
    /**汉语 */
    CHINESE = "cn",
    /**日语 */
    JAPANESE = "jp",
    /**西班牙语 */
    SPANISH = "sp",
    /**意大利语 */
    ITALIAN = "it",
    /**法语 */
    FRENCH = "fr",
    /**英语 */
    ENGLISH = "en",
}

//二进制数据单文件大小限制
export const MAX_ONE_FILE_SIZE = 200 * 1024 * 1024; //200M

export const enum EXCHANGE_DIRECTION {
    /**特殊资产来自 to 交易的发起账户，即出售 */
    ASSET_FROM_SENDER = 0,
    /**特殊资产来自 be 交易的发起账户，即求购 */
    ASSET_FROM_RECIPIENT = 1,
}

export const enum SPECIAL_ASSET_TYPE {
    /**特殊资产类型：dapp */
    DAPP_ID = 0,
    /**特殊资产类型：位名 */
    LOCATION_NAME = 1,
    /**特殊资产类型：非同质资产（非同质化权益） */
    ENTITY = 2,
}

export const enum PARENT_ASSET_TYPE {
    /**资产类型：dapp */
    DAPP = 1,
    /**资产类型：位名 */
    LOCATION_NAME = 2,
    /**资产类型：非同质资产 */
    ENTITY = 3,
    /**资产类型: 权益 */
    ASSETS = 5,
}

export const enum GIFT_DISTRIBUTION_RULE {
    /**平均分配 */
    AVERAGE = 0,
    /**根据任意账户的地址的随机分配法 */
    RANDOM = 1,
    /**根据接收者列表中账户地址的随机分配法
     * 这种规则会确保赠送的资产尽可能的被分配完，并且确保每一个接收账户都有能得到的金额
     */
    RECIPIENT_RANDOM = 2,
}

export const enum RECORD_OPERATION_TYPE {
    /**添加解析值 */
    ADD,
    /**删除解析值 */
    DELETE,
    /**更新解析值 */
    UPDATE,
}

export const enum RECORD_TYPE {
    /**自由类型 */
    UNKNOWN = 0,
    /**IPV4解析 */
    IPV4 = 1,
    /**IPV6解析 */
    IPV6 = 2,
    /**经纬度解析 */
    LNG_LAT = 3,
    /**账户地址解析 */
    ADDRESSV1 = 4,
    /**另一个位名 */
    LOCATION_NAME = 5,
    /**域名 */
    DNS = 6,
    /**url */
    URL = 7,
    /**电子邮箱 */
    EMAIL = 8,
}

export const enum LOCATION_NAME_OPERATION_TYPE {
    /**注册 lns */
    REGISTRATION,
    /**注销 */
    CANCELLATION,
}

export const enum DAPP_TYPE {
    /**付费应用 */
    PAID_APP = 0,
    /**免费应用 */
    FREE_APP = 1,
}

export const enum BNID_TYPE {
    /**测试网络 */
    TESTNET = "c",
    /**正式网络 */
    MAINNET = "b",
}

export const enum LOGGER_LEVEL {
    INFO = "info",
    DEBUG = "debug",
    WARN = "warn",
    ERROR = "error",
}

/**广播交易 */
export const BROADCAST_TRANSACTION_API_PATH = "/broadcast";

export const enum GENERATE_TRANSACTION_API_PATH {
    /**创建设置用户名交易 */
    TR_USERNAME = "/generate/username",
    /**创建设置安全密码交易 */
    TR_SIGNATURE = "/generate/signature",
    /**创建注册受托人交易 */
    TR_DELEGATE = "/generate/delegate",
    /**创建开启收票交易 */
    TR_ACCEPT_VOTE = "/generate/acceptVote",
    /**创建关闭收票交易 */
    TR_REJECT_VOTE = "/generate/rejectVote",
    /**创建治理投票交易 */
    TR_VOTE = "/generate/vote",

    /**创建权益发行交易 */
    TR_ISSUE_ASSET = "/generate/issueAsset",
    /**创建权益转移交易 */
    TR_TRANSFER_ASSET = "/generate/transferAsset",
    /**创建权益销毁交易 */
    TR_DESTORY_ASSET = "/generate/destoryAsset",
    /**创建权益赠送交易 */
    TR_GIFT_ASSET = "/generate/giftAsset",
    /**创建接受权益赠送交易 */
    TR_GRAB_ASSET = "/generate/grabAsset",
    /**创建权益委托交易 */
    TR_TRUST_ASSET = "/generate/trustAsset",
    /**创建接受权益委托交易 */
    TR_SIGN_FOR_ASSET = "/generate/signForAsset",
    /**创建权益交换交易 */
    TR_TO_EXCHANGE_ASSET = "/generate/toExchangeAsset",
    /**创建接受权益交换交易 */
    TR_BE_EXCHANGE_ASSET = "/generate/beExchangeAsset",

    /**创建注册 dappid 交易 */
    TR_DAPP = "/generate/dapp",
    /**创建 dappid 购买 交易 */
    TR_DAPP_PURCHASING = "/generate/dappPurchasing",
    /**创建数据存证交易 */
    TR_MARK = "/generate/mark",
    /**创建注册/注销链域名交易 */
    TR_LOCATION_NAME = "/generate/locationName",
    /**创建设置链域名管理员交易 */
    TR_SET_LNS_MANAGER = "/generate/setLnsManager",
    /**创建设置链域名解析值交易 */
    TR_SET_LNS_RECORD_VALUE = "/generate/setLnsRecordValue",
    /**创建资产交换交易 */
    TR_TO_EXCHANGE_SPECIAL_ASSET = "/generate/toExchangeSpecAsset",
    /**创建接受资产交换交易 */
    TR_BE_EXCHANGE_SPECIAL_ASSET = "/generate/beExchangeSpecAsset",

    /**创建非同质权益模板 - V0 冻结发行 */
    TR_ISSUE_ENTITY_FACTORY = "/generate/issueEntityFactory",
    /**创建非同质权益模板 - V1 销毁发行 */
    TR_ISSUE_ENTITY_FACTORY_V1 = "/generate/issueEntityFactoryV1",
    /**创建非同质权益 */
    TR_ISSUE_ENTITY = "/generate/issueEntity",
    /**销毁非同质权益 */
    TR_DESTORY_ENTITY = "/generate/destoryEntity",

    /**创建任意资产转移交易 */
    TR_TRANSFER_ANY = "/generate/transferAny",
    /**创建任意资产赠送交易 */
    TR_GIFT_ANY = "/generate/giftAny",
    /**创建接受任意资产赠送交易 */
    TR_GRAB_ANY = "/generate/grabAny",

    /**创建任意资产交换交易 */
    TR_TO_EXCHANGE_ANY = "/generate/toExchangeAny",
    /**创建接受任意资产交换交易 */
    TR_BE_EXCHANGE_ANY = "/generate/beExchangeAny",

    /**批量创建非同质权益 */
    TR_ISSUE_ENTITY_MULTI = "/generate/issueEntityMulti",

    /**创建批量任意资产交换交易 */
    TR_TO_EXCHANGE_ANY_MULTI = "/generate/toExchangeAnyMulti",
    /**创建接受批量任意资产交换交易 */
    TR_BE_EXCHANGE_ANY_MULTI = "/generate/beExchangeAnyMulti",

    /**创建注册链交易 */
    TR_REGISTER_CHAIN = "/generate/registerChain",
    /**创建权益迁出交易 */
    TR_EMIGRATE_ASSET = "/generate/emigrateAsset",
    /**创建权益迁入交易 */
    TR_IMMIGRATE_ASSET = "/generate/immigrateAsset",
}

export const enum MIGRATE_CERTIFICATE_API_PATH {
    /**创建迁移凭证 */
    MIGRATE_CERTIFICATE_GENERATE = "/generate/migrateCertificate",
    /**迁移凭证的迁出授权签名 */
    MIGRATE_CERTIFICATE_FROM_AUTH_SIGNATURE = "/generate/migrateCertificateFromAuthSignature",
    /**迁移凭证的迁入授权签名 */
    MIGRATE_CERTIFICATE_TO_AUTH_SIGNATURE = "/generate/migrateCertificateToAuthSignature",
}

export const enum COMMON_API_PATH {
    /**是否是合法的地址 */
    VERIFY_ADDRESS = "/common/verifyAddress",
    /**是否是合法的公钥 */
    VERIFY_PUBLICKEY = "/common/verifyPublicKey",
    /**创建公私钥对 */
    GENERATE_KEYPAIR = "/common/generateKeypair",
    /**创建账户 */
    GENERATE_ACCOUNT = "/common/generateAccount",
    /**根据密钥获取地址*/
    GENERATE_ADDRESS_BY_SECRET = "/common/generateAddressBySecret",
    /**根据公钥获取地址*/
    GENERATE_ADDRESS_BY_PUBLICKEY = "/common/generateAddressByPublicKey",
    /**非对称加密 */
    ASYMMETRIC_ENCRYPT = "/common/asymmetricEncrypt",
    /**非对称解密 */
    ASYMMETRIC_DECRYPT = "/common/asymmetricDecrypt",
    /**计算事件的最小手续费 */
    CALC_TRANSACTION_MIN_FEE = "/common/calcTransactionMinFee",

    /**创建加密签名*/
    GENERATE_CIPHERTEXT_SIGNATURE = "/common/generateCiphertextSignature",

    /**创建 blob 种子*/
    GENERATE_BLOB_SEED = "/common/generateBlobSeed",
    /**服务器时间校正 */
    TIME_CORRECTING_API_PATH = "/common/correcting",
    /**获取节点的可能最新区块高度 */
    MAYBE_HEIGHT_API_PATH = "/common/maybeHeight",

    /**生成注册链凭证 */
    GENERATE_REGISTER_CHAIN_CERTIFICATE_API_PATH = "/common/generateRegisterChainCertificate",
}

export const enum NEW_TRANSACTION_REFUSE_REASON {
    /**手续费低于网络手续费 */
    FEE_LESS_THAN_WEB_FEE = 0,
    /**交易过期 */
    TRS_EXPRIED = 1,
    /**交易已经在未处理交易进程 */
    TRANSACTION_IN_UNTREATEDTR = 2,
    /**交易已经在交易表中 */
    TRANSACTION_IN_TRS = 3,
    /**交易基础类型未找到 */
    TRANSACTION_BASE_TYPE_NOT_FOUND = 4,
    /**交易类型未找到 */
    TRANSACTION_BASE_NOT_FOUND = 5,
    /**链资产不足 */
    CHAIN_ASSET_NOT_ENOUGH = 6,
    /**资产不足 */
    ASSET_NOT_ENOUGH = 7,
    /**交易的发起账户资产冻结 */
    TRANSACTION_SENDER_ASSET_FROZEN = 8,
    /**交易的接收账户资产冻结 */
    TRANSACTION_RECIPIENT_ASSET_FROZEN = 9,
    /**交易的手续费不足 */
    TRANSACTION_FEE_NOT_ENOUGH = 10,
    /**必须给 dapp 的开发者投票 */
    MUSET_VOTE_FOR_DAPP_POSSESSOR = 11,
    /**交易资产负债 */
    TRANSACTION_ASSET_DEBT = 12,
    /**位名不存在 */
    LOCATION_NAME_NOT_EXIST = 13,
    /**账户不是位名的拥有者 */
    ACCOUNT_NOT_LNS_POSSESSOR = 14,
    /**dapp 已经存在 */
    DAPP_ALREADY_EXISTS = 15,
    /**账户已经是一个受托人 */
    ACCOUNT_ALREADY_DELEGATE = 16,
    /**缩写名已经存在 */
    ASSETTYPE_ALREADY_EXIST = 17,
    /**链名已经存在 */
    CHAINNAME_ALREADY_EXIST = 18,
    /**资产已经存在 */
    ASSET_ALREADY_EXIST = 19,
    /**位名已经存在 */
    LOCATION_NAME_ALREADY_EXIST = 20,
    /**不能将冻结账户设置为管理员 */
    CAN_NOT_SET_FROZEN_ACCOUNT_AS_MANAGER = 21,
    /**不能将原来的管理员设置为管理员 */
    CAN_NOT_SET_SAME_ACCOUNT_AS_MANAGER = 22,
    /**没有设置位名管理员的权限 */
    SET_LNS_MANAGER_PERMISSION_DENIED = 23,
    /**没有设置位名管理员的权限 */
    SET_LNS_RECORD_VALUE_PERMISSION_DENIED = 24,
    /**账户已经设置了用户名 */
    ACCOUNT_ALREADY_HAVE_USERNAME = 25,
    /**用户名已经存在 */
    USERNAME_ALREADY_EXIST = 26,
    /**账户已经给受托人投票 */
    ACCOUNT_ALREADY_VOTED_FOR_DELEGATE = 27,
    /**交易来自未来 */
    TRS_IN_FEATURE = 28,
    /**事件的 tpow 校验失败 */
    TRANSACTION_POW_CHECK_FIELD = 29,
    /**只能见证主权益 */
    TRUST_MAIN_ASSET_ONLY = 30,
    /**只能使用主权益购买 */
    USE_MAIN_ASSET_PURCHASE_ONLY = 31,
    /**账户剩余权益不足 */
    ACCOUNT_REMAIN_EQUITY_NOT_ENOUGH = 32,
    /**账户不是受托人 */
    ACCOUNT_IS_NOT_AN_DELEGATE = 33,
    /**受托人拒绝收票 */
    DELEGATE_IS_ALREADY_REJECT_VOTE = 34,
    /**只能迁移主权益 */
    MIGRATE_MAIN_ASSET_ONLY = 35,
    /**权益已经迁入 */
    ASSET_IS_ALREADY_MIGRATION = 36,
    /**资产已经存在 */
    MAGIC_ALREADY_EXIST = 37,
    /**entityFactory 已经存在*/
    ENTITY_FACTORY_ALREADY_EXIST = 38,
    /**entityFactory 不存在*/
    ENTITY_FACTORY_NOT_EXIST = 39,
    /**entity 已经存在*/
    ENTITY_ALREADY_EXIST = 40,
    /**entity 不存在*/
    ENTITY_NOT_EXIST = 41,
    /**账户不是 entity 拥有者 */
    ACCOUNT_NOT_ENTITY_POSSESSOR = 42,
    /**受托人拒绝收票 */
    DELEGATE_IS_ALREADY_ACCEPT_VOTE = 43,
    /**账户不是 entity 拥有者 */
    ACCOUNT_NOT_DAPPID_POSSESSOR = 44,
    /**资产不存在 */
    ASSET_NOT_EXIST = 45,
    /**dappid 不存在 */
    DAPPID_NOT_EXIST = 46,
}
