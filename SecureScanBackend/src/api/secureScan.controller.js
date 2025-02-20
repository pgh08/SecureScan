import zapClientCtrl from "../ZAP Client/zapClient.Controller.js";

export default class secureScanCtrl {
    static async apiGetHomePage(req, res, next) {
        res.json({Greet: "Hello World!"});
    }

    static async apiGetZapSpider(req, res, next) {
        let params = {
            contextid: 1,
            userid: null,
            url: "https://public-firing-range.appspot.com/",
            maxchildren: 10,
            recurse: true,
            inScopeOnly: false
        };
        
        let spider = await zapClientCtrl.getZapSpider(params);
        console.log(spider);
        res.json(JSON.stringify(spider));
    }

    // Update your functionality by creating new functions.
    static async apiGetSqlInjection(req, res, next) {
        let params = {

        }
    }
}