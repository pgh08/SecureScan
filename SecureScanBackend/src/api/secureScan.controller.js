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

        try {
            await zapSpiderCtrl.doSpiderScan(req);
            let alerts = await zapClientCtrl.getZapAlert(params);
            res.json(alerts);
        } catch(err) {
            res.sendStatus(400).json({error : "Alert laoding failed"})
        }
    }
}