import express from "express";
import dotenv from "dotenv";
import { processPostback } from "../controllers/postback";
import { processMessage } from "../controllers/messages";

dotenv.config()

const router = express.Router();
const verify_FB_Token = process.env.VERIFY_FB_TOKEN;

router.get("/webhook", (req, res) => {
    if (req.query["hub.verify_token"] === verify_FB_Token) {
        console.log("webhook verified");
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        console.error("verification failed. Token mismatch.");
        res.sendStatus(403);
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
    }
})

export default router;