export class HttpClient {
    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();
        const status = resp.status;
        return { data, status };
    }
}