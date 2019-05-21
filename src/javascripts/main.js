import firebase from 'firebase/app';

import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  console.error('keys', apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authBuilder();
  birfday.birfdayBuilder();
};

init();
