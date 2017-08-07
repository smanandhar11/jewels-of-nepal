import template from './prodfilter.html';
import controller from './prodfilter.controller';
import './prodfilter.scss';

let prodfilterComponent = {
  bindings: {
    colorSelected:'=',
    typeSelected: '=',
    priceSelected: '=',
    baseColorSelected: '='
  },
  template,
  controller
};

export default prodfilterComponent;
