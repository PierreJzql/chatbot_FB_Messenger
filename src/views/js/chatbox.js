import dotenv from "dotenv";

dotenv.config()

const idPlugIn = process.env.ID_PLUGIN

let chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", idPlugIn);
chatbox.setAttribute("attribution", "biz_inbox");

