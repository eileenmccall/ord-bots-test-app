"use client";
import { useState } from "react";
import { getCoin } from "../actions/tokens";
import { Coin } from "../types/coin.type";

export default function BalancePane() {
    var [address, setAddress] = useState("");
    var [coin, setCoin] = useState<Coin | null>(null);

    return (
        <section>
            <h2>Get coin balance</h2>
            <input 
                value={address} 
                onChange={e => setAddress(e.target.value)} 
                type="text" 
                placeholder="Enter your coin address" 
            />
            <button onClick={async () => await handleButton()}>Get Coin</button>

            {coin && (
                <div>
                    <h3>Overall balance: {coin.overall_balance}</h3>
                    <h3>Available balance: {coin.available_balance}</h3>
                    <h3>Block height: {coin.block_height}</h3>
                    <h3>Tick: {coin.tick}</h3>
                </div>
            )}
        </section>
    );

    async function handleButton() {
        var coin = await getCoin(address);
        setCoin(coin);
    }
}