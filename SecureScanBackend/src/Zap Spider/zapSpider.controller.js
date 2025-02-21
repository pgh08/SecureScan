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

        await zapSpiderCtrl.waitForSpiderCompletion(scanId);
        return scanId;
    }

    static async waitForSpiderCompletion(scanId) {
        while (true) {
            let status = await this.getSpiderStatus(scanId);

            console.log(`Spider scan status: ${status.status}%`);
            
            if (status.status >= 100) {
                console.log("Spider scan completed.");
                break; // Exit loop when scan is finished
            }
            
            await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds before checking again
        }
    }

    static async getSpiderStatus(scanId) {
        let spiderTool = await zapClientInitializer.initializeZapProxy();
        return spiderTool.spider.status(scanId);
    }
}