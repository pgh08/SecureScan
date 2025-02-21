import express from "express";
import secureScanCtrl from "./secureScan.controller.js";

const router = express.Router();

// Secure Scan Home Page routes.
router.route("/").get(secureScanCtrl.apiGetHomePage);
router.route("/alert").get(secureScanCtrl.apiGetZapAlert);
router.route("/ascan").get(secureScanCtrl.apiGetZapAscan);

export default router;