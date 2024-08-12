export function getHeaders() {
    const headers: HeadersInit = new Headers();
    headers.set("x-api-key", process.env.API_KEY || "");
    headers.set("Content-Type", "application/json");
    return headers;
}