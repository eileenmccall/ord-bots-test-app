"use client";
import { useState } from "react";
import { Order } from "../../types/order.type";
import styles from "./Orders.module.css";

interface OrdersProps {
    orders: Order[];
}

export default function Orders ({ orders }: OrdersProps) {
    var [ activeTab, setActiveTab ] = useState(0);

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
                                <span>Order {index}</span>
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
                            <p>Amount: {order.amount}</p>
                            <p>Chain Fee: {order.chainFee}</p>
                            <p>Status: {order.status}</p>
                            <p>State: {order.state}</p>
                            <p>Order Type: {order.orderType}</p>
                        </article>
                    ))
                }
        </section>
    );

    function handleTabClick () {}
}