import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDggrKGMFLPk8RAUkiQ9mId8-wqfY0xOm4",
  authDomain: "vue-fire-auth-63027.firebaseapp.com",
  projectId: "vue-fire-auth-63027",
  storageBucket: "vue-fire-auth-63027.appspot.com",
  messagingSenderId: "357785672884",
  appId: "1:357785672884:web:684ca39d847dd9431fcbe1"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }