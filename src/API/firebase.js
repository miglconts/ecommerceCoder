// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxugGk-_hs8V7oIVmgyfTn7soluzfllI",
  authDomain: "coderreact-f1c86.firebaseapp.com",
  projectId: "coderreact-f1c86",
  storageBucket: "coderreact-f1c86.appspot.com",
  messagingSenderId: "1052751887617",
  appId: "1:1052751887617:web:66a172f4f5d7356ce7af00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProduct(productID) {
  let docRef = doc(db, "productos", productID);
  let response = await getDoc(docRef);
  let item = response.data();
  item.id = response.id;
  return item;
}
export async function getProducts() {
  const collectionRef = collection(db, "productos");
  const docSnap = await getDocs(collectionRef);
  const docsArray = docSnap.docs;
  /* const dataDocs = docsArray.map((doc) =>{
    const item = doc.data()
    item.id = doc.id
    return item
  }); */
  const dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return dataDocs;
}
export async function getProductCategory(categoryID) {
  const collectionRef = collection(db, "productos");
  const q = query(collectionRef, where("category", "==", categoryID));
  const docSnap = await getDocs(q);
  const docsArray = docSnap.docs;

  const dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return dataDocs;
}
