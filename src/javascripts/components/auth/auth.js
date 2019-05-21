import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import './auth.scss';

import googleImage from './googlebtn.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authBuilder = () => {
  let domString = '<button id ="google-auth">';
  domString += `<img src=${googleImage}/>`;
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authBuilder };
