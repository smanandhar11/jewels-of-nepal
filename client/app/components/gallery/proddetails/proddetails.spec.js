import ProddetailsModule from './proddetails';
import ProddetailsController from './proddetails.controller';
import ProddetailsComponent from './proddetails.component';
import ProddetailsTemplate from './proddetails.html';

describe('Proddetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProddetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProddetailsController();
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
      expect(ProddetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProddetailsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProddetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProddetailsController);
    });
  });
});
