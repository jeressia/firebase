import 'bootstrap';

import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';

import '../styles/main.scss';

const init = () => {
  auth.authBuilder();
  birfday.birfdayBuilder();
};

init();
