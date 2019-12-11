![Logo of the project](./client/src/image/logo.png)

# Call4Free &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

A website that helps to find the cheapest operator to make an international phone call. It allows users to compare prices for different operators.
Number identification based on country code. Search based on code and country name.

## Installing / Getting started

A quick introduction of the minimal setup.

```shell
npm install
```

index.js in server folder should be changed to connect a database with operators, codes, prices.
.env file for firebase in client folder
.env folder for Twilio API in the root folder

## Developing

### Built With

Client side:
"@material-ui/core": "^4.7.0",
"@material-ui/icons": "^4.5.1",
"axios": "^0.19.0",
"body-parser": "^1.19.0",
"firebase": "^7.5.2",
"material-ui-image": "^3.2.2",
"mysql": "^2.17.1",
"react": "^16.6.3",
"react-autocomplete": "^1.8.1",
"react-autosuggest": "^9.4.3",
"react-bootstrap": "^1.0.0-beta.14",
"react-dom": "^16.6.3",
"react-router": "^5.1.2",
"react-router-dom": "^5.1.2",
"react-scripts": "^2.1.1",
"styled-components": "^4.4.1",
"twilio": "^3.37.1",
"twilio-client": "^1.9.6"

Server side :
"dotenv": "^8.2.0",
"express": "^4.17.1",
"morgan": "^1.9.1",
"mysql": "^2.17.1",
"sequelize": "^5.21.2",
"twilio": "^3.37.1"

### Prerequisites
Need credentials for Twilio account :
https://www.twilio.com/

### Setting up Dev

Here's a brief intro for developers in order to start developing
the project further:

```shell
git clone <project>
cd your-project/
npm install
```

## Api Reference
https://firebase.google.com/ - Firebase for authentification of the user

https://www.twilio.com/ - Twilio for international phone calls from the site.

## Database

MySQL Server 8.0 or higher
Link for North America pricelist : https://drive.google.com/file/d/1clEBcDN66NtExOvoORzRHDhY4QtG06Qh/view?usp=sharing
