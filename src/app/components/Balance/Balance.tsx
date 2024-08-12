"use client";
import { useState } from "react";
import styles from "./Balance.module.css";
import { getToken } from "@/app/actions/tokens";
import { Token } from "@/app/types/token.type";


export default function Balance() {
    var [ticker, setTicker] = useState("");
    var [token, setToken] = useState<Token | null>(null);

    return (
        <section>
            <h2>Balance:</h2>
            <div className={styles.pane}>
                <p>Check the balance of a BRC-20 token! Just enter the ticker of the token you want to view and push the big yellow button below!</p>
                <h3>Token Ticker:</h3>
                <input 
                    className={styles.input}
                    value={ticker} 
                    onChange={e => setTicker(e.target.value)} 
                    type="text" 
                    placeholder="Enter the ticker for the token you'd like to view" 
                />
                <button onClick={handleButton} className={styles.button}>Get Token Info</button>
            {token && (
                <>
                    <h3>Result</h3>
                    <dl>
                        <dt><h4>Remaining Supply</h4></dt>
                        <dd>{token.remaining_supply}</dd>
                        <dt><h4>Max Supply</h4></dt>
                        <dd>{token.max_supply}</dd>
                    </dl>
                </>
            )}
            </div>
        </section>
    )

    async function handleButton() {
        var token = await getToken(ticker);
        setToken(token);
    }
}