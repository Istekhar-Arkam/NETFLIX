import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOCLjApLgxIQ1-9Dg9aYw1HoD9Lw5wvOA",
  authDomain: "netflix-clone-6ebb3.firebaseapp.com",
  projectId: "netflix-clone-6ebb3",
  storageBucket: "netflix-clone-6ebb3.firebasestorage.app",
  messagingSenderId: "534109064125",
  appId: "1:534109064125:web:fee6c2d98b9584d10160d4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      name: name,
      email: email,
      uid: user.uid,
      authProvider: "local",
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, signup, login, logout };
