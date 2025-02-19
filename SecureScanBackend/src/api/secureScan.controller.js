import zapClientCtrl from "../ZAP Client/zapClient.Controller.js";

export default class secureScanCtrl {
    static async apiGetHomePage(req, res, next) {
        res.json({Greet: "Hello World!"});
    }

    static async apiGetZapSpider(req, res, next) {
        let params = {
            url: "https://public-firing-range.appspot.com/",
            recurse: true,
            inScopeOnly: false
        };
        
        let spider = zapClientCtrl.getZapSpider(params);

        res.json(JSON.stringify(spider));
    }
}