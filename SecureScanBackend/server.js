import express from "express";
import cors from "cors";
import secureScan from "./src/api/SecureScan.route.js";

const app = express();

// Using the middleware.
app.use(cors());
app.use(express.json());

// Routing the page.
app.use("/api/v1/secureScan", secureScan);
app.use("*", (req, res) => res.sendStatus(404).json({error : "Page not found"}));

export default app;