import express from "express";
import secureScanCtrl from "./secureScan.controller.js";

const router = express.Router();

// Secure Scan Home Page routes.
router.route("/").get(secureScanCtrl.apiGetHomePage);

export default router;