import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZrJp8WwFUYqTI_1CBnkqwXIUxd3M_5QM",
  authDomain: "vagi-fashion.firebaseapp.com",
  projectId: "vagi-fashion",
  storageBucket: "vagi-fashion.appspot.com",
  messagingSenderId: "447799371024",
  appId: "1:447799371024:web:d4e5f8b8f8f8f8f8f8f8f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;