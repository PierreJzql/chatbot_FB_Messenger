import request from 'request';
import dotenv from "dotenv";

dotenv.config()

const FBPageToken = process.env.FB_PAGE_TOKEN

const processMessage = (event) => {
    let sender = event.sender.id;
    let text = event.message.text;

    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FBPageToken },
        method: 'POST',
        json: {
            recipient: {id: sender},
            message: {text: text}
          }
    }, (err, res) => {
        if (err) {
            console.log('Error sending message: ', err);
        } else if (res.body.error) {
            console.log('Error: ', res.body.error);
        }
    })
    
};

export default processMessage