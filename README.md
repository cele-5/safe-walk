# Safe Walk Prototype Mobile App

## Prerequisites

### Git

Please follow this guide to install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Then open a terminal and type:

```bash
git version
```

Expect a response like this: `git version 2.29.2`.

The next thing you can do is download (or, in git terms, `clone`) this repository, also from the terminal:

```bash
cd 'folder/where/you/keep/your/projects'
git clone https://github.com/cele-5/safe-walk.git
```

If everything worked well, git should donwload the project and you should see the following output:

```bash
Cloning into 'safe-walk'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (4/4), done.
Receiving objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
```

### IDE

The next thing you should do is prepare an IDE for the work ahead.

It should support Node.js / javascript projects.

One suggestion is VS Code -- find the instructions here: https://code.visualstudio.com/docs/setup/setup-overview

If you chose VS Code, it may be a good idea to also download the React Native Tools plugin.

Once you have your IDE ready, open the folder where you downloaded the `safe-walk` project.

### Node

The platform for building modern Javascript applications, for the web or for mobile is Node.js. 

Therefore, the next step is to install Node.js from here: https://nodejs.org/en/download/

Test your node installation by opening a terminal and typing these commands:

```bash
node --version
npm --version
```

NPM stands for 'Node.js Package Manager' -- this is how we shall bring in libraries for our app.

Tip: if you installed VS Code, you can open a terminal inside it, using the shortcut <code>Ctrl-\`</code> on Windows or <code>control-\`</code> on Mac.

### Expo

Expo is a framework for React Native development that allows you to write React (javascript) code, view it live in your mobile Expo app and publish it as Android or iOS packages.

Follow the installation instructions to set it up: https://docs.expo.io/get-started/installation/

Note that on Mac or Linux, you may need to run:

```bash
sudo npm i -g expo-cli
```

`sudo` is needed to run the command as root, because it may need to affect directories that are not owned by your current user.

Don't forget to download the Expo Go app on your mobile (Android or iOS).

### Add .env file

The application secret information (such as the Facebook APP ID) shall not be stored in git, because the repository is public.

Instead, we shall save them in a separate file, that is part of `.gitignore`, called `.env`. 
To develop locally, you need to create this file in the root directory, and fill it with the following information:

```
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_APP_ID=<your-firebase-app-id>
FIREBASE_MESSAGING_SENDER_ID=<your-firebase-msg-sender-id>
FACEBOOK_APP_ID=<your-facebook-app-id>
FACEBOOK_APP_SECRET=<your-facebook-app-secret>
```

### Start the project

The first thing we need to do is fetch all the dependencies:

```bash
npm i
```

`i` stands for `install`. This will download or update the libraries from the `dependencies` and `devDependencies` sections of the `package.json` file.

The next thing we'll do is start the Expo server:

```bash
npm start
```

`start` refers to the script with that name that is present in the `scripts` section of the `package.json` file.

This will bring up a management web page with a QR code that you can scan from your mobile Expo Go app.

Congratulations! Your app is officially running on your phone.

Go ahead, change something in `screens/TabOneScreen.tsx` and see how it reflects on your live preview.