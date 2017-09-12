import homeComponent from "../home/home.component";

class LoginController {
  constructor($firebaseAuth, $state ,$firebaseObject) {
    'ngInject';
    this.$state = $state;
    this.$firebaseAuth = $firebaseAuth;
    // this.$firebaseArray = $firebaseArray;
    this.data = 'hello';

    //firebase
    const rootRef = firebase.database().ref().child('angular');
    const ref = rootRef.child('object');
    this.object = $firebaseObject(ref);
  }

  $onInit() {
   // const dbRefGoodies = firebase.database().ref().child('products');
   // // const dbRefNames = dbRefGoodies.child('name');
   //
   //
   //  dbRefGoodies.on('value', snap => console.log(snap.val()));
   //
   //  // dbRefNames.on('value', snap => console.log(snap.val()));
  }

  signIn() {
    let auth = this.$firebaseAuth();
    let username = this.username;
    let password = this.password;


    auth.$signInWithEmailAndPassword(username, password).then(function () {
      //this is not being loaded into this function
      console.log('success log in');
    }).catch(function (err) {
      console.log(err);
    });
  }

  move() {
    // this.$state.go('home');
    console.log('working');
  }

}

export default LoginController;
