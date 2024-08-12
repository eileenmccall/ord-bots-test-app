"use server";
import { Token} from "../types/token.type";

export async function getToken(ticker: string): Promise<Token> {
    const apiPath = "https://api.ordinalsbot.com/opi/v1/brc20/ticker_info"
    const queryPath = `${apiPath}?ticker=${ticker}`

    console.log(ticker);

    var headers: HeadersInit = new Headers();
    headers.set("x-api-key", process.env.API_KEY || "");
    headers.set("Content-Type", "application/json");

    var res = await fetch(queryPath, {
        method: "GET",
        headers
    })
    var data = await res.json();

    console.log(data);
    return data.result as Token;
}