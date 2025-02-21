import zapClientCtrl from "../ZAP Client/zapClient.Controller.js";
import zapSpiderCtrl from "../Zap Spider/zapSpider.controller.js";

export default class secureScanCtrl {
    static async apiGetHomePage(req, res, next) {
        res.json({Greet: "Hello World!"});
    }

    static async apiGetZapAlert(req, res, next) {
        const uri = req.query.url;
        let params = {
            baseurl: uri
        };

        await zapSpiderCtrl.doSpiderScan(req);
        let alerts = await zapClientCtrl.getZapAlert(params);
        res.json(alerts);
    }

    static async apiGetZapAscan(req, res, nex) {
        const scanPolicyName = req.query.scanPolicyName ? req.query.scanPolicyName : null;
        const policyId = req.query.policyId ? req.query.policyId : null;

        let params = {
            scanPolicyName: scanPolicyName,
            policyId: policyId
        }

        let ascanResults = await zapClientCtrl.getZapAscan(params);
        res.json(ascanResults);
    }
}