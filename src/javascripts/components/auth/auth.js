import util from '../../helpers/util';

const authBuilder = () => {
  let domString = '';
  domString += '<h4>Auth</h4>';
  util.printToDom('auth', domString);
};

export default { authBuilder };
