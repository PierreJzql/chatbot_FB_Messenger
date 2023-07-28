import express from "express";
import dotenv from "dotenv";
// import { processPostback } from "../controllers/postback";
// import { processMessage } from "../controllers/messages";

dotenv.config()

const router = express.Router();
const verify_FB_Token = process.env.VERIFY_FB_TOKEN;

router.get("/webhook", (req, res) => {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];


    if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === config.verifyToken) {
            // Respond with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        } else {
            console.error("verification failed. Token mismatch.");
            res.sendStatus(403);
        }
    }
});

router.post("/webhook", (req, res) => {
    if (req.body.object === "page"){
       
        req.body.entry.forEach((entry) => {
       
           entry.messaging.forEach((event) => {
           console.log(event);
           if (event.postback){
              processPostback(event);
           } else if (event.message){
              processMessage(event);
           }
       });
     });
     res.sendStatus(200);
    } else {
        console.log("404 not found")
        res.sendStatus(404);
    }
})

export default router;