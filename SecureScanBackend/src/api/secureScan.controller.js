import zaproxy from "zaproxy";

export default class secureScanCtrl{
    static async apiGetHomePage(req, res, next) {
        res.json({Greet: "Hello World!"});
    }

    static async apiGetZapClient(req, res, next) {
        
    }
}