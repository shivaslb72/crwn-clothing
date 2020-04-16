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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase