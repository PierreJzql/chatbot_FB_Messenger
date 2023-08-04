<div align="center">
  
# Welcome to Chatbot FB Messenger 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/PierreJzql/chatbot_FB_Messenger/graphs/commit-activity)

Creating a FB Messenger chatbot

<p>
  <a href="#about">About the project</a> &nbsp;&bull;&nbsp;
  <a href="#getting_started">Getting Started</a> &nbsp;&bull;&nbsp;
  <a href="#usage">Usage</a> &nbsp;&bull;&nbsp;
  <a href="#hosting">Hosting</a> &nbsp;&bull;&nbsp;
  <a href="#facebook_page">Facebook</a> &nbsp;&bull;&nbsp;
  <a href="#facebook_developers">Facebook Developers</a> &nbsp;&bull;&nbsp;
  <a href="#dialogflow">Dialogflow</a> &nbsp;&bull;&nbsp;
  <a href="#links">Useful Links</a> &nbsp;&bull;&nbsp;
  <a href="#author">Author</a>
  </p>

### 🏠 [Homepage](https://github.com/PierreJzql/test_vercel#readme)

### ✨ [Demo](https://chatbotfbmessenger-e4572701eff6.herokuapp.com/)
</div>

<!-- TABLE CONTENT -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting_started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#hosting">Hosting</a></li>
    <li>
        <a href="#facebook_page">Facebook</a>
    </li>
    <li>
        <a href="#facebook_developers">Facebook Developers</a>
            <ul>
                <li><a href="#facebook_app">Facebook App</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#messenger_settings">Messenger settings</a></li>
            </ul>
    </li>
    <li><a href="#dialogflow">Dialogflow</a></li>
    <li><a href="#links">Useful Links</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

---
<!-- ABOUT THE PROJECT -->
<div id="about">

## 📖 About the project
<br>
    <p>
    This chatbot can be integrated into your website and respond to user questions based on your settings.
    </p>
<br>
<div id="build_with">

### Built with:
![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
<br>
</div>

</div>

---
<!-- GETTING STARTED -->
<div id="getting_started">

## 🛠 Getting Started
<br>
Clone down this repository.

<div id="prerequisites">

### Prerequisites:
You will need `node` and `npm` installed globally on your machine.
You will need ![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white) and ![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white) acount.
</div>

<div id="installation">

### Installation:

`npm install` 
</div>
</div>

---
<!-- USAGE -->
<div id="usage">

## 👩‍💻 Usage
<br>

In VS Code or your preferred editor, copy the `.env.example` file to `.env`.
    
```sh
cp .env.example .env
```
    
❗️ This step is **essential** to properly configure the local environment of the project.

In the .env file, you can define the following variables according to your choice:
    
- `PORT`
- `VERIFY_FB_TOKEN`

</div>

---
<!-- HOSTING -->
<div id="hosting">

## 🏠 Hosting
<br>
Deploy the project on an online hosting platform like Heroku, Vercel, or others.

Note: For Vercel, use the [documentation](https://vercel.com/guides/using-express-with-vercel) to use Express.js with Vercel.
<br>
</div>

---
<!-- FACEBOOK -->
<div id="facebook_page">

## ![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)

<details>
<summary>Facebook page</summary>
<ol>
<li>Create a profile on Facebook if you don't have one.</li>
<li>Next, create a page associated with your profile.
The access link for creation is <a href="https://www.facebook.com/pages/?category=your_pages">here.</a></li>
<li>Go to the settings of the new page you've created and select "New Page Experience" (Available as of the date of this readme).</li><br>

![FB new version pages](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/5d4b635f-a3a1-4aa4-aa49-839a69d94801)


<li>Select the 'Advanced Messaging' section.</li><br>

![FB advanced messaging](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/eacde778-8273-407c-9492-2c4b41841319)


<li>Add the URL obtained after deploying the project to the chosen hosting provider.</li><br>

![FB whitelisted](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/7950f8e2-6bcb-4537-863b-2b332e20e57f)

</ol>
</details>
</div>

---
<!-- FACEBOOK DEVELOPERS -->
<div id="facebook_developers">

## ![Facebook Developers](https://scontent-cdg4-2.xx.fbcdn.net/v/t39.2365-6/294896942_578136803798152_4396611467422003184_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=PqArNVIDDGQAX--P7Km&_nc_ht=scontent-cdg4-2.xx&oh=00_AfANqxii9AnCMUFfi2DrarHsrlmOYM10aKZ4eX671MS4Gw&oe=64E7202D)

<div id="facebook_app">
<details>
        <summary>Facebook App</summary>
        <ol>
            <li>On the website <a href="https://developers.facebook.com/">Facebook Developers</a>, create an account if you don't have one.</li>
            <li>Create an app and choose 'Other'.</li>
            <li>In the type selection, choose 'None'.</li>
            <li>On the next page, you only need to provide a name for your application.</li>
            <li>Now you'll be presented with the available Facebook products. Here, we will select 'Messenger'.</li>
        </ol> 
</details>
</div>

<div id="settings">
<details>
<summary>Settings</summary>
<br>

In the 'General' section, you'll need to provide a Privacy Policy URL, You can use the website [freeprivacypolicy](https://www.freeprivacypolicy.com) if you don't have one.

You can fill out the rest of the fields if you wish.
</details>
</div>


<div id="messenger_settings">
<details>
<summary>Messenger settings</summary>
<ol>
<li>In the messenger settings, select 'Add or Removes Pages' in the Access Tokens section, and choose your previously created page.</li><br>

![FB app access tokens](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/c8779d3f-ca5e-460b-acf5-78422406e812)

<li>Generate a token and copy it. This is the FB_PAGE_TOKEN environment variable.</li><br>

![FB app copy token](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/c8555315-1e14-492b-968e-a2dd7c7a6125)

<li>Now you need to fill in the 'Call Callback URL' with your hosted website's name and the VERIFY_FB_TOKEN environment variable.</li><br>

![FB app callback URL](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/43489943-a07f-4288-aac3-229983f6fded)

<p>❗️ Attention: You need to add /webhook to the end of your URL.</p>

<li>In the 'Add Subscriptions' section, choose the desired subscriptions. For my application, I selected the first 2: 'Posts' and 'Messaging Postbacks'.</li><br>

![FB app subscriptions fields](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/5eeb2007-d88d-4c1d-9f71-9344356fc2f8)

<li>In the 'Chat plugin' section, you need to enable 'Guest Update' to allow people without a Facebook account to send you a message.</li>
<li>You can now take the application live by activating the option at the top of the screen.</li><br>

![FB app live](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/ff80e03f-b9f0-42ef-a2b5-7d716859e1c0)

Note: For optimal use and interaction with Messenger users, the application must be validated by Facebook in the App control section. This requires a validated corporate account.
When we created this chatbot, we didn't yet have a corporate account, so it only worked with guests.
</ol>
</details>
</div>

</div>

---

<!-- DIALOGFLOW -->
<div id="dialogflow">

## ![Dialogflow](	https://img.shields.io/badge/dialogflow-FF9800?style=for-the-badge&logo=dialogflow&logoColor=white)
<details>
<summary>Create chatbot and intents</summary>
<ol>

<li>Create a GCP account if you don't have one.</li>
<li>In the GCP console, create a new project. The name of your project should be set in your PROJECT_ID environment variable.</li>
<li>In your project's dashboard, select 'APIs and Services' -> 'Library'.</li><br>

![GCP library](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/0aa458ba-cd68-4da3-ba0f-35a29255d338)

<li>Create credentials and service account.</li><br>

![GCP service account](https://github.com/PierreJzql/chatbot_FB_Messenger/assets/123973402/43734c2c-bbc5-4f40-9dfd-0668c8216af2)

<li>From here, I recommend following this <a href="https://www.aitude.com/how-to-get-dialogflow-api-credentials/">website</a> to retrieve the JSON file.</li>
<li>Once you have obtained the JSON file, you can fill in the `PRIVATE_KEY` and `CLIENT_EMAIL` environment variables.</li>
<li>You can now configure your API with different intents. Go to <a href='https://dialogflow.cloud.google.com'>Dialogflow</a> to set it up according to your preferences.</li>
</ol>
</details>
</div>

---

<!-- PLUGIN -->
<div id="plugin">

## ![Plugin Messenger](https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white)

<details>
    <summary>Add your plug-in</summary>
<ol>
<li>In order to add the Messenger plugin to your website, you need to go to the management of your page.</li>
<li>In the Meta Business Suite section, go to 'See All Messaging Settings' under ⚙️.</li>
<li>Select Chat Plugin and follow the instructions.</li>
<li>
Copy the code provided by Facebook and replace it in the JS scripts in the 'src/views/js' folder.

```
.
└── src .   » Project source code
    |
    └── views .   » Layouts of the projet (Header, Body, Footer)
                |
                └── JS    » Modify files "chatbox.js" and "FB_SDK.js"
    
```
</li>
</ol>
</details>
</div>

---

<!-- EXECUTE -->
<div id="execute">

## ✅ Execute

Go to the URL of your site to test your chatbot messenger.
</div>

---

<!-- USEFUL LINKS -->
<div id="links">

## 📚 Useful links



* [Pilar Figueroa](https://medium.com/crowdbotics/how-to-create-your-very-own-facebook-messenger-bot-with-dialogflow-and-node-js-in-just-one-day-f5f2f5792be5)<br>
* [HaryPhamDev](https://www.youtube.com/watch?v=Gv-FWOTY4TM)<br>
* [Quick Start Facebook developer](https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start)<br>
* [Create an AI chatbot with Dialogflow](https://www.cloudskillsboost.google/focuses/634?locale=fr&parent=catalog) <br>
</div>

---

<!-- AUTHOR -->
<div id="author">

## 🖋️Author

👤 **Pierre JEZEQUEL**

* Github: [@PierreJzql](https://github.com/PierreJzql)
* LinkedIn: [@Pierre Jezequel](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/pierre-jezequel-91055a246)
</div>

---

<!-- SHOW YOUR SUPPORT -->
## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
