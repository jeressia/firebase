import firebase from 'firebase/app';

import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(firebaseConfig);
  auth.authBuilder();
  birfday.birfdayBuilder();
};

init();
