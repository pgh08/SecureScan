import zapClientInitializer from "./zapClient.initializer.js";

export default class zapClientCtrl {
    static async getZapSpider(params) {

        let ascanTool = zapClientInitializer.initializeZapProxy();
        
        let response = (await ascanTool).spider.scan(params);
        return response;
    }
}