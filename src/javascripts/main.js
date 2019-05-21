import firebase from 'firebase/app';

import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import myNavbar from './components/myNavbar/myNavbar';

import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authBuilder();
  birfday.birfdayBuilder();
};

init();
