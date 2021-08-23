# <p align="center"> <a href="https://netflix-clone-yiteng.web.app/"> Netflix Clone </a>(Official page: https://www.netflix.com/au/)</p>

## Table of Contents
- <a href="#about"> About the Project </a>
  - <a href="#built-with"> Build With </a>
  - <a href="#feature"> Feature </a>
- <a href="#getting-started"> Getting Started </a>
  - <a href="#prerequisites"> Prerequisites </a>
  - <a href="#requiredConfig"> Required Config</a>
  - <a href="#installation"> Installation </a>
- <a href="#demo"> Demo </a>
- <a href="#contact"> Contact </a>

## <a id="about">About the Project</a>
A clone version of Netflix developed with React-Redux, firebase hosting

- <a id="built-with"> Built with: </a>
  - <a href="https://react-redux.js.org/">React-Redux</a>
  - <a href="https://firebase.google.com/">Firebase</a>
  - <a href="https://stripe.com/en-au"> Stripe - extension of Firebase </a>

- <a id="feature"> Features: </a>
  - [x] Applied Firebase Authentication that allow users to create/login via email account
  - [x] Redux applied to store logged in user info and TMDb movie infomation
  - [x] Axios applied to fetch TMDb api with associated movie information
  - [x] Setup firebase hosting the application 
  - [x] Applied Stripe extension of firebase to support payment process (test-mode in this demo)


## <a id="getting-started"> Getting Started: </a>

### <a id="prerequisites"> Prerequisites: </a>
This section is about tips to help you play with this demo on your own device 🐱
 1. (Optional) Enter `npm install npm@latest -g` in your vsCode terminal to install latest npm globally
 2. (Optional) Enter `npm -v` in your vsCode terminal and make sure it gives the version of your npm

### <a id="requiredConfig"> Required Config: </a>
 1. Go to <a href="https://www.themoviedb.org/">TMDb</a> and login (or create) account
 2. Get and save <b>TMDb API_KEY</b> from account setting (left banner) `API Key (v3 auth)`
 3. Go to <a href="https://firebase.google.com/">Firebase</a> and login (or create) account
 4. Go to console (top-right corner) and `Add project` to create your project which will host this demo
 5. Get and save <b>Firebase config</b> from project setting (left banner) `SDK setup and configuration` and choose `Config`
 6. Still under <b>Firebase</b> page, go to `extensions` (left banner) and install `Run Subscription Payments with Stripe`
 7. Go to <a href="">Stripe<a> and login (or create) account
 8. Get and save <b>Publishable key</b> from `API keys` (left banner) under Developers option
 9. Follow the Stripe construction to setup firebase database and make connection between Firebase and Stripe
  
### <a id="installation"> Installation: </a>
 1. Clone the repo to your local device `https://github.com/Syberseul/Netflix_clone.git`
 2. Install required dependencies `npm install`
 3. Create `.env` file at the root of the folder, and enter config which get previously in `Required Config` section:
 ```
 REACT_APP_TMDB_API_KEY = TMDB_API_KEY goes here

 REACT_APP_FIREBASE_API_KEY = FIREBASE_API_KEY goes here
 REACT_APP_AUTH_DOMAIN = FIREBASE_AUTH_DOMAIN goes here
 REACT_APP_PROJECT_ID = FIREBASE_PROJECT_ID goes here
 REACT_APP_STORAGE_BUCKET = FIREBASE_STORAGE_BUCKET goes here
 REACT_APP_MESSAGING_SENDER_ID = FIREBASE_MESSAGING_SENDER_ID goes here
 REACT_APP_APP_ID = FIREBASE_APP_ID goes here
  
 REACT_APP_STRIPE_PUBLIC_KEY = STRIPE_PUBLIC_KEY goes here
 ```
 
 ## <a id="demo"> Demo: </a>
 - Login and Create Account:
  
https://user-images.githubusercontent.com/32564367/128809385-e4a7ed3e-bc98-400e-a679-e93c6afe866a.mp4
  
 - Movie Page (Responsive):
  
https://user-images.githubusercontent.com/32564367/128809445-35110c75-6d3b-4a19-bfe4-2781861fb58b.mp4
  
 - Payment Process:
  
https://user-images.githubusercontent.com/32564367/128809519-ea6c40b7-8f54-4a05-b6db-88a57e87a14f.mp4
  
 ## <a id="contact"> Contact Email: </a>
 yteng.huang@gmail.com
