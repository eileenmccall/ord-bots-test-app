export type Order = {
    id: string;
    amount: number;
    chainFee: number;
    status: 'ok' | 'refunded';
    state: 'expired' | 'complete' | 'refunded';
    orderType: "dirct" | "bulk";
    createdAt: number;
}