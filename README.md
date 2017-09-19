![alt text](https://image.ibb.co/m2tUzF/icon_96x96.png "Logo Title Text 1")

# [React Firebase Bolierplate](https://github.com/aligent-chris-dorward/react-firebase-bolierplate)

Multiple React applications in a single development environment.

## Features

* PWA Client Application
* Manager Application with easy UI using [Bootstrap](https://getbootstrap.com/)
* Shared components & Sass styles
* [Firebase](https://firebase.google.com) hosting & NoSQL Databse & User authentication
* Webpack
* Jest Unit testing [Jest](https://facebook.github.io/jest/)

## 1) Setup

Install the node dependencies locally. note: Latest versions of npm automatically generate a [package-lock.json](https://docs.npmjs.com/files/package-lock.json) file

```bash
git clone git@bitbucket.org:aligent/react-firebase-bolierplate.git
cd react-firebase-bolierplate
npm install
cd functions && npm install && cd ../
```

## 2) Verify install

Start the development server. If everything is working correctly, the app will be running on http://localhost:3000.
```bash
npm start
```
Open `/src/Apps/Client/Client.jsx`


Run the Jest testing suite
```bash
npm test
```

Create the first optimised production build in the ./build directory.

```bash
npm run build
```

## 3) Setup Firebase

Login to the [Firebase console](https://console.firebase.google.com/u/0/) (create an account if you do not already have one). Create a new project in the console. Open `/.firebaserc` and replace `<firebase-project-id>` with your newly created Firebase Project ID.

### Firebase Authentication

Enable the [Identity Toolkit API](https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=269080579378).

In firebase console for your project, we will enable 2 sign in methods. We will use Google to allow Client users to quickly register their devices and Email/Password to control access to the Manager App.

Select Authentication from the left hand menu and in the Sign-in method tab, enable the email/password and Google providers.

Switch to the Users tab and set up a user account for the manager app.

### Firebase Deployment

 Install the [Firebase CLI tools](https://firebase.google.com/docs/cli/) and log the CLI in.

```bash
sudo npm install -g firebase-tools
firebase login
```
Now we can use Firebase to serve our optimised build folder to check it's readyness for deployment to the cloud. If everything is working correctly, the optimised app will be running on http://localhost:5000.

```bash
npm run serve
```

All good so far? Then we're ready to deploy the project to the cloud.
```bash
npm run deploy
```
The first time you deploy the project will take a little longer than subsequent times as Firebase enables and activates the APis it needs. Once the deployment is done, the CLI will let you know the URL of your publically accessible app.


## Carry on

Check out the site's score using Google's [Lighthouse PWA Analysis Tool](https://developers.google.com/web/ilt/pwa/lighthouse-pwa-analysis-tool). Nearly 100%? Pretty good huh? Keep checking in with lighthouse as you develop your app to keep the autit score as high as possible.

Congratulations, you're all set. Now go forth and create something cool.
