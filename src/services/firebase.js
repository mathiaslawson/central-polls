import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './firebaseConfig';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);


  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  signOut = () => this.auth.signOut();

  addUser = (uid, userData) =>
    this.db
      .collection('users')
      .doc(uid)
      .set(userData);

  getUser = uid =>
    this.db
      .collection('users')
      .doc(uid)
      .get();
}

export default Firebase;
