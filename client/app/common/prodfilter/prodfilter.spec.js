import ProdfilterModule from './prodfilter';
import ProdfilterController from './prodfilter.controller';
import ProdfilterComponent from './prodfilter.component';
import ProdfilterTemplate from './prodfilter.html';

describe('Prodfilter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProdfilterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProdfilterController();
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
      expect(ProdfilterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProdfilterComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProdfilterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProdfilterController);
    });
  });
});
