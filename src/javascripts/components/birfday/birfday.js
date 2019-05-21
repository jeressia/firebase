import util from '../../helpers/util';

const birfdayBuilder = () => {
  let domString = '<div class="birfdayDiv">';
  domString += '<h4>Birfday</h4>';
  domString += '</div>';
  util.printToDom('birfday', domString);
};

export default { birfdayBuilder };
