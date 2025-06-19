// firebase-config.js
import { initializeApp }  from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth }         from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase }     from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAq1n2IIwMauj8nj7dEyPSg7wsKVID3AT8",
  authDomain: "chemical-inventory-e0681.firebaseapp.com",
  databaseURL: "https://chemical-inventory-e0681-default-rtdb.firebaseio.com",
  projectId: "chemical-inventory-e0681",
  storageBucket: "chemical-inventory-e0681.appspot.com",
  messagingSenderId: "1040891808880",
  appId: "1:1040891808880:web:043585c0cff38d79a338b5",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const rdb  = getDatabase(app);
