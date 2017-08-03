import template from './prodfilter.html';
import controller from './prodfilter.controller';
import './prodfilter.scss';

let prodfilterComponent = {
  bindings: {
    colorSelected:'=',
    typeSelected: '=',
    priceSelected: '='
  },
  template,
  controller
};

export default prodfilterComponent;
