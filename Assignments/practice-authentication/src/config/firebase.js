import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBOOy2V8R4eELlgeRbqykUqnG9KClVl7W4",
    authDomain: "practice-authentication-95bf8.firebaseapp.com",
    projectId: "practice-authentication-95bf8",
    storageBucket: "practice-authentication-95bf8.appspot.com",
    messagingSenderId: "980431705853",
    appId: "1:980431705853:web:8b789a3d4158b253b65094",
    measurementId: "G-DZRG5612GK"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const signUp = (email,password,fullName) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        alert("user registered successfully");
        db.collection('users').add({ email, fullName })
        .then(res => {
          alert('user info added', res)
        }).catch(e => {
          alert('error=>', e.message)
        })
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  export{
    signUp,
    login
  }