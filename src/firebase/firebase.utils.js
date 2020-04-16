import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const config = {
 apiKey: "AIzaSyAfEnXCjpkteI7z2G66aRNX7n1pWbbCXG8",
 authDomain: "crwn-db-106c6.firebaseapp.com",
 databaseURL: "https://crwn-db-106c6.firebaseio.com",
 projectId: "crwn-db-106c6",
 storageBucket: "crwn-db-106c6.appspot.com",
 messagingSenderId: "1086151881322",
 appId: "1:1086151881322:web:b7a0bf507f9f0cacb09013",
 measurementId: "G-0HV51E11PF"
}



firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

 if (!snapShot.exists) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
   await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
   });
  } catch (error) {
   console.log('error creating user', error.message);
  }
 }

 return userRef;
};

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase