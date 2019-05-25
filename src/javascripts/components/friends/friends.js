import firebase from 'firebase/app';
import 'firebase/auth';

import friendsData from '../../helpers/data/friendsData';
import util from '../../helpers/util';

const birfdayDiv = document.getElementById('birfday');
const newFriendDiv = document.getElementById('new-friend');

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      birfdayDiv.classList.remove('hide');
      newFriendDiv.classList.add('hide');
    })
    .catch(err => console.error('no new friends', err));
  console.error(newFriend);
};

const newFriendButton = () => {
  birfdayDiv.classList.add('hide');
  newFriendDiv.classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domString = '<button id="add-friend-btn" class="btn btn-secondary">Add Friend</button>';
  util.printToDom('friends', domString);
  document.getElementById('add-friend-btn').addEventListener('click', newFriendButton);
};

export default { showFriends };
