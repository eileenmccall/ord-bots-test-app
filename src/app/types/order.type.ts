export type Order = {
    amount: number;
    chainFee: number;
    status: 'ok' | 'refunded';
    state: 'expired' | 'complete' | 'refunded';
    orderType: "dirct" | "bulk";
}