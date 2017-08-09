import template from './proddisplay.html';
import controller from './proddisplay.controller';
import './proddisplay.scss';

let proddisplayComponent = {
  bindings: {

  },
  require: {
    galleryComp:'^gallery'
  },
  template,
  controller
};

export default proddisplayComponent;
