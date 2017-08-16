import SocialModule from './social';
import SocialController from './social.controller';
import SocialComponent from './social.component';
import SocialTemplate from './social.html';

describe('Social', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SocialModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SocialController();
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
      expect(SocialTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SocialComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SocialTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SocialController);
    });
  });
});
