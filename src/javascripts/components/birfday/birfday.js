import util from '../../helpers/util';

const birfdayBuilder = () => {
  let domString = '';
  domString += '<h4>Birfday</h4>';
  util.printToDom('birfday', domString);
};

export default { birfdayBuilder };
