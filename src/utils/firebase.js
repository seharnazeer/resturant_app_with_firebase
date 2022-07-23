import { collection,addDoc, getDocs,
   //  orderBy,
    query } from "firebase/firestore"
import { db } from "../firebase.config"
const collectionref=collection(db,"data");
export const uploadData=(newdata)=>{
   return addDoc(collectionref,newdata);
}
export const getData= async()=>{
   const data=await getDocs(query(collectionref));
   return data.docs.map((doc)=>doc.data())
}