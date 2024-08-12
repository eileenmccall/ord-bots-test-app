import { getHeaders } from "./headers";

export async function getOrder(orderId: string) {
    const path = "https://api.ordinalsbot.com/order";
    const queryPath = `${path}?id=${orderId}`;
    const headers = getHeaders();

    const response = await fetch(queryPath, {
        headers,
    });

    return await response.json();
}

export async function getAllOrders() {
    const orderList = [
        "39c9bdcf-6459-4509-b7a6-7138ac826378",
        "7d138fda-001c-4421-b1df-cbb5b8571d20",
        "8bb1d29e-171a-4a63-9b38-c5ee3e7fe2e1",
        "800fa3c4-7004-43e8-823e-928a2e5c30a0"
    ];

    return Promise.all(orderList.map(getOrder));
}