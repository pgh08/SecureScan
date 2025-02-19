import ZapClient from "zaproxy";

export default class zapClientInitializer {
    static async initializeZapProxy() {
        const zapOptions = {
            apiKey: "8st4e8redg8vk9g66371mp0fv0",
            proxy: {
                host: '127.0.0.1',
                port: 8080
            }
        };

        try {
            const zapoxy = new ZapClient(zapOptions);
            return zapoxy;
        } catch (err) {
            throw new Error(err);
        }
    }
}