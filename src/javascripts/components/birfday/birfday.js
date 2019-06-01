import birfdayData from '../../helpers/data/birfdayData';

import util from '../../helpers/util';

const birfdayBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthday) => {
    let domString = '<div class="birfdayDiv">';
    domString += `<h1 class="bdate">${birthday.date}</h1>`;
    domString += `<img src=${birthday.imageUrl} alt="birthday location" class="img-thumbnail"/>`;
    domString += `<h3 class="blocate">${birthday.location} @ ${birthday.time}</h3>`;
    domString += '</div>';
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birfday', err));
};

export default { birfdayBuilder };
