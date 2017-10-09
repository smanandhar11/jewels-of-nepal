import template from './billboard.html';
import controller from './billboard.controller';
import './billboard.scss';

let billboardComponent = {
  bindings: {
    prodName:'<',
    prodImg:'<'
  },
  template,
  controller
};

export default billboardComponent;
