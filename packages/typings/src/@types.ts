declare namespace TransactionMaker {
    type AllPartial<T> = {
        [P in keyof T]?: AllPartial<T[P]>;
    };
}
