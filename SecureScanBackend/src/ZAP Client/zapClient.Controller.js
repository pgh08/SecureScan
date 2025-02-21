import zapClientInitializer from "./zapClient.initializer.js";

export default class zapClientCtrl {
    static async getZapAlert(params) {
        console.log("Alert Generation Started");

        let spiderTool = await zapClientInitializer.initializeZapProxy();
        let response = await spiderTool.core.alerts(params);
        let highRishAlerts = response.alerts.filter(item => (item.risk === 'Medium' || item.risk === 'High'));
        
        let result = {};

        highRishAlerts.forEach(item => {
            if (!result[item.alert]) {
                result[item.alert] = []; // Initialize array if not exists
            }
            result[item.alert].push(item);
        })

        console.log("Alert Generated Successfully");

        return result;
    }
}