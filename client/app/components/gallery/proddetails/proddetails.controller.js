class ProddetailsController {
  constructor($http, $stateParams) {
    'ngInject';
    this.$http = $http;
    this.$stateParams= $stateParams;
  }
  $onInit() {
    this.$http.get('../../../proddisplay/proddisplay.controller.js').success( function(data){
      this.product = data[$routeParam.id];
    });
  }

}

export default ProddetailsController;
