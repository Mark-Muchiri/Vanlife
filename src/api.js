// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db = getFirestore(app)

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : `/api/vans`;
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data.vans;
}
export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch host vans",
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data.vans;
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
