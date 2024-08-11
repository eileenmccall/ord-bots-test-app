import { Order } from "../types/order.type";

interface OrderPaneProps {
    order: Order;
}

export default function ({ order }: OrderPaneProps) {
    return (
        <section>
            <h2>Your order:</h2>
            <article>
                <p>Amount: {order.amount}</p>
                <p>Chain Fee: {order.chainFee}</p>
                <p>Status: {order.status}</p>
                <p>State: {order.state}</p>
                <p>Order Type: {order.orderType}</p>
            </article>
        </section>
    );
}