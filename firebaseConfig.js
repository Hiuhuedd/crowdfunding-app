import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOcCGVA7DrNmaWBytmhPvSeaucCRy4N4M",
  authDomain: "crowdfunding-8c476.firebaseapp.com",
  projectId: "crowdfunding-8c476",
  storageBucket: "crowdfunding-8c476.appspot.com",
  messagingSenderId: "469122967600",
  appId: "1:469122967600:web:2b9d6ca925e51c7ddda5f5",
  measurementId: "G-6HG6C7EJ0G"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app);

export { auth, provider,db }

