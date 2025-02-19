import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import zapClientInitializer from "./src/ZAP Client/zapClient.initializer.js";

dotenv.config();

const port = process.env.SERVER_PORT || 8000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);

    try {
        zapClientInitializer.initializeZapProxy();
        console.log("Zap Client Initiated Successfully");
    } catch (err) {
        console.log(err);
    }
});

