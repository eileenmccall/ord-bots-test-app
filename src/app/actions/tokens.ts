"use server";
import { Token} from "../types/token.type";
import { getHeaders } from "../utils/headers";

export async function getToken(ticker: string): Promise<Token> {
    const apiPath = "https://api.ordinalsbot.com/opi/v1/brc20/ticker_info"
    const queryPath = `${apiPath}?ticker=${ticker}`

    const headers = getHeaders();

    const res = await fetch(queryPath, {
        method: "GET",
        headers
    })
    const data = await res.json();

    return data.result as Token;
}