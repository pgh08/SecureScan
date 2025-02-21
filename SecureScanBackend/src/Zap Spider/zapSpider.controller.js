import zapClientInitializer from "../ZAP Client/zapClient.initializer.js";

export default class zapSpiderCtrl {
    static async doSpiderScan(req) {
        let params = {
            url: req.query.url,
            maxchildren: 10,
            recurse: false
        }
        let spiderTool = await zapClientInitializer.initializeZapProxy();
        let scanId = await spiderTool.spider.scan(params);
        console.log(`Spider scan started with ID: ${scanId['scan']}`);

        await this.waitForCompletion("Spider", scanId);
        return scanId;
    }

    static async waitForCompletion(scanType, scanId) {
        while (true) {
            let status = await this.getStatus(scanId);

            console.log(`${scanType} scan status: ${status.status}%`);
            
            if (status.status >= 100) {
                console.log(`${scanType} scan completed.`);
                break; // Exit loop when scan is finished
            }
            
            await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds before checking again
        }
    }

    static async getStatus(scanId) {
        let spiderTool = await zapClientInitializer.initializeZapProxy();
        return spiderTool.spider.status(scanId);
    }
}