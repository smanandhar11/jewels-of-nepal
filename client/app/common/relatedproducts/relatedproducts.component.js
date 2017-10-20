import template from './relatedproducts.html';
import controller from './relatedproducts.controller';
import './relatedproducts.scss';

let relatedproductsComponent = {
  bindings: {
    prodColor:'<',
    prodId:'<',
    prodType:'<'
  },
  template,
  controller
};

export default relatedproductsComponent;
