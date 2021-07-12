import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpg3_uzgO1kiQ6KJP5H8xtZARDglyweLw",
    authDomain: "authentication-redux-54f59.firebaseapp.com",
    projectId: "authentication-redux-54f59",
    storageBucket: "authentication-redux-54f59.appspot.com",
    messagingSenderId: "419676857860",
    appId: "1:419676857860:web:43b1b28719f96d59817751",
    measurementId: "G-8CWYMZRVHE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  const signUp = (email,password,fullName) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        alert("user registered successfully");
        db.collection('users').doc(user.uid).set({email,fullName})
        .then(res => {
          alert('user info added', res)
        }).catch(e => {
          alert('error=>', e.message)
        })
      })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorMessage);
    // });
}

function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

export{
    signUp,
    login
}