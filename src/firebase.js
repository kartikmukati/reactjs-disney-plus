import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
     apiKey: "AIzaSyCZxFTXYomuLJkP8LpZoctxGzLlHh_wP8c",
     authDomain: "disneyplus-clone-421b1.firebaseapp.com",
     projectId: "disneyplus-clone-421b1",
     storageBucket: "disneyplus-clone-421b1.appspot.com",
     messagingSenderId: "813209807739",
     appId: "1:813209807739:web:9c5b1d4bae180f76a96bde"
 };

 const firebaseApp = initializeApp(firebaseConfig);

 const db = getFirestore(firebaseApp);

 const auth = getAuth(firebaseApp);

 const provider = new GoogleAuthProvider();

 const storage = getStorage(firebaseApp);

 export { auth, provider, storage };
 export default db;