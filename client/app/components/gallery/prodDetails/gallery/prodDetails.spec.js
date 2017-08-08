import Gallery/prodDetailsModule from './gallery/prodDetails';
import Gallery/prodDetailsController from './gallery/prodDetails.controller';
import Gallery/prodDetailsComponent from './gallery/prodDetails.component';
import Gallery/prodDetailsTemplate from './gallery/prodDetails.html';

describe('Gallery/prodDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Gallery/prodDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Gallery/prodDetailsController();
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
      expect(Gallery/prodDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Gallery/prodDetailsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Gallery/prodDetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Gallery/prodDetailsController);
    });
  });
});
