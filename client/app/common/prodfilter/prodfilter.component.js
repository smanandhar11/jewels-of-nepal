import template from './prodfilter.html';
import controller from './prodfilter.controller';
import './prodfilter.scss';

let prodfilterComponent = {
  bindings: {
    menuClick:'&',
    changeValue: '&',
    colorValue:'<',
    typeValue: '<',
    priceValue: '<',
    baseColorValue: '<'
  },
  template,
  controller
};

export default prodfilterComponent;
