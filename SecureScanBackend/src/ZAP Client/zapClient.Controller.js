import zapClientInitializer from "./zapClient.initializer.js";

export default class zapClientCtrl {
    static async getZapAlert(params) {

        console.log("Alert Generation Started");

        let alertTool = await zapClientInitializer.initializeZapProxy();
        let response = await alertTool.core.alerts(params);
        let highRishAlerts = response.alerts;
        let filtering = {};

        highRishAlerts.forEach(item => {
            if (!filtering[item.alert]) {
                filtering[item.alert] = []; // Initialize array if not exists
            }
            filtering[item.alert].push(item);
        })

        let allowedKeys = ['method', 'evidence', 'description', 'url', 'solution', 'risk', 'tags'];
        let result = await this.getCleanResult(filtering, allowedKeys);

        console.log("Alert Generated Successfully");

        return result;
    }

    static async getCleanResult(data, allowedKeys) {
        let result = Object.fromEntries(
            Object.entries(data).map(([key, value]) => [
                key,
                value.map(obj => {
                    return Object.fromEntries(Object.entries(obj).filter(([k]) => allowedKeys.includes(k)))
                })
            ])
        );
        return result;
    }

    static async getZapAscan(params) {

        console.log("Ascan started");
        let ascanTool = await zapClientInitializer.initializeZapProxy();
        let response = await ascanTool.ascan.scanners(params);
        console.log("Ascan Ended");
        await ascanTool.authentication.setAuthenticationMethod()
        return response;
    }
}