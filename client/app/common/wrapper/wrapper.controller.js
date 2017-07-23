let _lodash = require('lodash');

class WrapperController {
  constructor($attrs) {
    let _this = this;
    let classStyle = [];

    //passdown size if provided
    _lodash.default.each(['xs','sm','md','lg'], function(size) {
      if($attrs.hasOwnProperty(size)) {
        classStyle.push(size);
        return _this;
      }
    });

    //if no size, set lg
    if(!classStyle.length) {
      classStyle.push('lg');
    }

    // pass down classStylees if provided
    if($attrs.hasOwnProperty('class')) {
      classStyle.push($attrs.class);
    }

    this.classStyle = classStyle.join('');
  }
}

export default WrapperController;
