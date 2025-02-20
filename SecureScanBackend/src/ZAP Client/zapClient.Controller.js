import zapClientInitializer from "./zapClient.initializer.js";

export default class zapClientCtrl {
    static async getZapSpider(params) {

        let spiderTool = zapClientInitializer.initializeZapProxy();
        
        let response = await (await spiderTool).spider.scan(params);
        const scanId = response['scan'];
        
        const results = await (await spiderTool).spider.results(scanId);

        return results;
    }
}