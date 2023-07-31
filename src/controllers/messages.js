import request from 'request';
import dotenv from "dotenv";
import dialogflow from "@google-cloud/dialogflow";

dotenv.config();

const FBPageToken = process.env.FB_PAGE_TOKEN;
const projectId = "chatbotfbmessenger";
const language = "fr"

const config = {
    credentials: {
        private_key: process.env.private_key,
        client_email: process.env.client_email
    }
}

const sessionClient = new dialogflow.SessionsClient(config);



const sendMessage = (event) => {
    let sender = event.sender.id;
    let text = event.message.text;

    let sessionId = 'Chaty'

    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );

    const dialogFlowRequest = {
        session: sessionPath,
        queryInput: {
            text: {
                text: text,
                languageCode: language,
            },
        },
    };

    sessionClient.detectIntent(dialogFlowRequest)
        .then(res => {
            const result = res[0].queryResult;
            const dialogFlowText = result.fulfillmentText;

            request({
                url: 'https://graph.facebook.com/v2.6/me/messages',
                qs: { access_token: FBPageToken },
                method: 'POST',
                json: {
                    recipient: { id: sender },
                    message: { text: dialogFlowText }
                }
            }, (fbErr, fbRes) => {
                if (fbErr) {
                    console.log('Error sending message: ', fbErr);
                } else if (fbRes.body.error) {
                    console.log('Error: ', fbRes.body.error);
                }
            });
        })
        .catch(err => {
            console.error("Error calling Dialogflow API:", err);
        }); 
};

export default sendMessage;