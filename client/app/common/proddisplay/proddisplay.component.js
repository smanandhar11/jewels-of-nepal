import template from './proddisplay.html';
import controller from './proddisplay.controller';
import './proddisplay.scss';

let proddisplayComponent = {
  bindings: {
    colorValue:'<',
    typeValue: '<',
    priceValue: '<',
    baseColorValue: '<'
  },
  template,
  controller
};

export default proddisplayComponent;
