import homeComponent from "../home/home.component";

class LoginController {
  constructor($firebaseAuth, $state, $firebaseObject, authFact) {
    'ngInject';
    this.$state = $state;
    this.$firebaseAuth = $firebaseAuth;
    this.$firebaseObject = $firebaseObject;
    this.authFact = authFact;
  }


  $onInit() {
    //firebase
    const rootRef = firebase.database().ref().child('angular');
    const ref = rootRef.child('object');
    this.object = this.$firebaseObject(ref);

    // ref.on('value', snap => this.objVal = snap.val());
    //can also be written as
    ref.on('value', function (snap) {
      // console.log(snap.val());
    }, function (err) {
      console.log(err);
    })
  }

  signIn() {
    let auth = this.$firebaseAuth();
    let username = this.username;
    let password = this.password;
    self = this;

    if (username && password) {
      auth.$signInWithEmailAndPassword(username, password).then(function () {
        //'this' is not being loaded into this function
        //setting authentication true
        self.authFact.authenticated = true;
        self.$state.go('home');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }

  move() {
    // this.$state.go('home');
    console.log('working');
  }

}

export default LoginController;
