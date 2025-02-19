import express from "express";
import secureScanCtrl from "./secureScan.controller.js";
import zapClientCtrl from "../ZAP Client/zapClient.Controller.js";

const router = express.Router();

// Secure Scan Home Page routes.
router.route("/").get(secureScanCtrl.apiGetHomePage);
router.route("/spider").get(secureScanCtrl.apiGetZapSpider);

export default router;