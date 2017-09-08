class LoginController {
  constructor($firebaseAuth) {
    'ngInject';
    this.auth = false;
    this.$firebaseAuth = $firebaseAuth;
  }
  signIn() {
    let auth = this.$firebaseAuth();
    let username = this.username;
    let password = this.password;

    console.log(auth);
    auth.$signInWithEmailAndPassword(username, password).then(function() {
      this.auth = true;
      console.log(this.auth);
    }).catch(function(err) {
      console.log(err);
    });
  }


}

export default LoginController;
