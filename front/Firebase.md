
# Add Firebase SDK

## Use npm

> If you're already using npm and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

```$ npm install firebase```
> Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

```ruby
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmj-REJWMrLOzjvZLUF0X2zeO7vGRWIIM",
  authDomain: "quiz-managemet-sytem.firebaseapp.com",
  projectId: "quiz-managemet-sytem",
  storageBucket: "quiz-managemet-sytem.appspot.com",
  messagingSenderId: "778612835034",
  appId: "1:778612835034:web:2b31b74f56cf95ffc2dbe3"
};

const app = initializeApp(firebaseConfig);
```

> [!Note]
> This option uses the modular JavaScript SDK, which provides reduced SDK size.

> Learn more about Firebase for web: Get Started, Web SDK API Reference, Samples

# Install Firebase CLI

> To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

> Run the following npm command to install the CLI or update to the latest CLI version.

```npm install -g firebase-tools```

> Doesn't work? Take a look at the Firebase CLI reference or change your npm permissions

# Deploy to Firebase Hosting

> You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

## Sign in to Google

```firebase login```
```Initiate your project```

> Run this command from your app's root directory:

```firebase init```
> When you're ready, deploy your web app
> Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

## firebase deploy
> After deploying, view your app at quiz-managemet-sytem.web.app

> Need help? Check out the Hosting docs
