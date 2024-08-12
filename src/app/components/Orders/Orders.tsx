"use client";
import { useState } from "react";
import { Order } from "../../types/order.type";
import styles from "./Orders.module.css";

interface OrdersProps {
    orders: Order[];
}

export default function Orders ({ orders }: OrdersProps) {
    const [ activeTab, setActiveTab ] = useState(0);

    return (
        <section>
            <h2 id="ordersTablist">Orders:</h2>
                <div 
                    role="tablist" 
                    aria-labelledby="ordersTablist"
                    className={styles.tabList}
                >
                    {
                        orders.map((order, index) => (
                            <button 
                                className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
                                key={index} 
                                role="tab"
                                aria-controls={`order-${index}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span>Order {index + 1}</span>
                            </button>
                        ))
                    }
                </div>
                {
                    orders.map((order, index) => (
                        <article
                            key={index} 
                            id={`order-${index}`} 
                            role="tabpanel" 
                            aria-labelledby={`order-${index}`}
                            className={`${styles.tabPanel} ${activeTab === index ? "" : styles.hidden}`}
                        >
                            <h3>Order ID:</h3>
                            <p>{order.id}</p>
                            <div className={styles.orderDetails}>
                                <div><h4>Amount:</h4><p>{order.amount}</p></div>
                                <div><h4>Chain Fee:</h4><p>{order.chainFee}</p></div>
                                <div><h4>Status:</h4><p>{order.status}</p></div>
                                <div><h4>State:</h4><p>{order.state}</p></div>
                                <div><h4>Order Type:</h4><p> {order.orderType}</p></div>
                                <div><h4>Created At:</h4><p>{new Date(order.createdAt).toLocaleDateString()}</p></div>
                            </div>
                        </article>
                    ))
                }
        </section>
    );
}