import WrapperModule from './wrapper';
import WrapperController from './wrapper.controller';
import WrapperComponent from './wrapper.component';
import WrapperTemplate from './wrapper.html';

describe('Wrapper', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WrapperModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WrapperController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WrapperTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = WrapperComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(WrapperTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WrapperController);
    });
  });
});
