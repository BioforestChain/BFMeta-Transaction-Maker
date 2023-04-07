export abstract class CommonApi<T> {
    abstract readonly EXEC_API_PATH: TransactionMaker.Common.COMMON_API_PATH;

    constructor(protected networkHelper: TransactionMaker.NetworkHelper) {}

    async sendGetRequest(argv?: TransactionMaker.Common.CommonParams, ip?: string) {
        try {
            const result = await this.networkHelper.sendGetRequest<TransactionMaker.Server.CommonReturn<T>>(this.EXEC_API_PATH, argv, ip);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.CommonFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.EXEC_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }

    async sendPostRequest(argv: TransactionMaker.Common.CommonParams, ip?: string) {
        try {
            const result = await this.networkHelper.sendPostRequest<TransactionMaker.Server.CommonReturn<T>>(this.EXEC_API_PATH, argv, ip);
            return result;
        } catch (e: any) {
            const errorInfo: TransactionMaker.Server.CommonFailureReturn = {
                success: false,
                error: {
                    code: "7001",
                    message: `request api ${this.EXEC_API_PATH} error`,
                    description: e.message,
                },
            };
            return errorInfo;
        }
    }
}
