// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmp27zQyq8-LPVC3NufwMZUt3DzPiU-M",
  authDomain: "vanlife-mark.firebaseapp.com",
  projectId: "vanlife-mark",
  storageBucket: "vanlife-mark.appspot.com",
  messagingSenderId: "1039330766406",
  appId: "1:1039330766406:web:4d801e12775a3953242447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
  return dataArr;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  );
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    };
  }
  return data;
}
