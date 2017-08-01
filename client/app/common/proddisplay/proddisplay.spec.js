import ProddisplayModule from './proddisplay';
import ProddisplayController from './proddisplay.controller';
import ProddisplayComponent from './proddisplay.component';
import ProddisplayTemplate from './proddisplay.html';

describe('Proddisplay', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProddisplayModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProddisplayController();
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
      expect(ProddisplayTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProddisplayComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProddisplayTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProddisplayController);
    });
  });
});
