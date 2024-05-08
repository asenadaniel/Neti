import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAgwkxr0eV58N2-GQkkKeMZ9QpCL_vPwpo",
  authDomain: "neti-ccf38.firebaseapp.com",
  projectId: "neti-ccf38",
  storageBucket: "neti-ccf38.appspot.com",
  messagingSenderId: "736304632865",
  appId: "1:736304632865:web:b540b4410a228baa61ff60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    })
    toast('Successfully Created An Account')
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-'))
  }
}

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast('Successfully Logged In')
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }

}

export const logOut = () => {
  signOut(auth)
  toast('Successfully Logged Out')
}