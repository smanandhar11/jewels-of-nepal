import BillboardModule from './billboard';
import BillboardController from './billboard.controller';
import BillboardComponent from './billboard.component';
import BillboardTemplate from './billboard.html';

describe('Billboard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BillboardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BillboardController();
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
      expect(BillboardTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BillboardComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BillboardTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BillboardController);
    });
  });
});
