
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDLUVcDGKVokF9sJgKuH4zlThDmaAgxneg",
  authDomain: "restuarantapp-ce584.firebaseapp.com",
  projectId: "restuarantapp-ce584",
  storageBucket: "restuarantapp-ce584.appspot.com",
  messagingSenderId: "324608986968",
  appId: "1:324608986968:web:1ee002c55553ba9bc35f2d"
};

const app = getApps.length > 0? getApp():initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);
export  {app,db,storage}