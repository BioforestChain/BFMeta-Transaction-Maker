# BFChain-SDK

## Installation - 安装

`$ npm install @bfmeta/transaction-maker-api`

### Requrements - 必要条件

-   npm

-   typescript

## Docs & Community - 文档 & 社区

<!-- 这里写我们的社区及文档的地址 -->

## Usage - 用法

### Server

```ts

// 运行目录下建 config/config.json 填入以下内容
{
    "//port": "交易服务器监听的端口号",
    port: 8888,
    "//chainNodeIps": "可用的链节点 ip",
    chainNodeIps: ["127.0.0.1"],
    "//broadcastTimeout": "广播超时时间，默认 30000",
    broadcastTimeout: 30000,
    "//genesisInfoConfig": "创世块信息",
    genesisInfoConfig: {
        "//genesisBlockPath": "创世块路径",
        genesisBlockPath: "genesisInfos/bfmtest-genesisBlock-testnet.json",
        "//genesisBlockLicensePath": "创世块授权文件路径",
        genesisBlockLicensePath: "genesisInfos/bfmtest-license-testnet.json"
    },
    "//lang": "密钥类型 cn 汉语、jp 日语、sp 西班牙语、it 意大利语、fr 法语、en 英语",
    lang: "en"
}

运行 transaction-marker-server 服务

```

### Client

```ts
import { Api } from "@bfmeta/transaction-maker-api";
import { PARENT_ASSET_TYPE } from "@bfmeta/transaction-maker-core";

// 也可以再运行目录下建 config/config.json 填入以下内容，new 的时候就不用传参

const config: TransactionMaker.Api.ConfigOptions = {
    "//ips": "交易服务器的 ip，端口",
    ips: ["127.0.0.1:8888"],
    "//requestTimeout": "请求超时时间，默认 10000",
    requestTimeout: 10000,
};

const sdk = new Sdk(config);

// 生成交易然后广播
const result = await api.transaction.generateTransferAny(argv, ipInfo.ip);

if (result.success) {
    const resp = await api.transaction.broadcastTransaction({
        transaction: result.result,
        ip: ipInfo.nodeIp,
    });
    if (resp.success) {
        console.log(resp.result);
    } else {
        console.log(resp);
    }
} else {
    console.log(result);
}

或者

// 生成交易并且广播

const result = await api.transaction.sendTransferAny(argv, ipInfo);
console.log(result);
```

## Changelog - 更新日志
