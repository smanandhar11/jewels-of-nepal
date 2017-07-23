import template from './wrapper.html';
import controller from './wrapper.controller';
import './wrapper.scss';

let wrapperComponent = {
  restrict: 'E',
  transclude: true,
  replace: true,
  bindings: {},
  template,
  controller
};

export default wrapperComponent;
