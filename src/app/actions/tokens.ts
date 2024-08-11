"use server";
import {Coin} from "../types/coin.type";

export async function getCoin(address: string): Promise<Coin> {
    const apiPath = "https://api.ordinalsbot.com/opi/v1/brc20/get_current_balance_of_wallet"
    const queryPath = `${apiPath}?address=${address}`

    var headers: HeadersInit = new Headers();
    headers.set("x-api-key", process.env.API_KEY || "");
    headers.set("Content-Type", "application/json");

    var res = await fetch(queryPath, {
        method: "GET",
        headers
    })
    var data = await res.json();
    return data.result[1] as Coin;
}