

class ProddetailsController {
  constructor($http, $stateParams) {
    'ngInject';
    this.$http = $http;
    this.$stateParams= $stateParams;
  }
  $onInit() {
    console.log('Initilizating');
    doWork();
  }
  doWork() {
    console.log('working');
  }

}

export default ProddetailsController;
