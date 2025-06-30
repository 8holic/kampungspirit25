//Store the config and initate the strapkey
import { initializeApp }  from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBr1EJyETcCoeGsytiP8miTBTzFPWNVkyU",
  authDomain:        "digital-stamp-info-sgbitcraft.firebaseapp.com",
  projectId:         "digital-stamp-info-sgbitcraft",
  storageBucket:     "digital-stamp-info-sgbitcraft.firebasestorage.app",
  messagingSenderId: "1090982094050",
  appId:             "1:1090982094050:web:63e5e7ec746f8c551f2abb",
  measurementId:     "G-870QQ95KPG"
};

// initialise once
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
