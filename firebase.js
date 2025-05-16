// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDSuv249JiF_3Laimsojok3F8JOkM95fIQ",
//   authDomain: "bollywood-songs-ai.firebaseapp.com",
//   projectId: "bollywood-songs-ai",
//   storageBucket: "bollywood-songs-ai.appspot.com",
//   messagingSenderId: "304037127660",
//   appId: "1:304037127660:android:afa1760e7dcad3259d0cc9",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSuv249JiF_3Laimsojok3F8JOkM95fIQ",
  authDomain: "bollywood-songs-ai.firebaseapp.com",
  projectId: "bollywood-songs-ai",
  storageBucket: "bollywood-songs-ai.appspot.com",
  messagingSenderId: "304037127660",
  appId: "1:304037127660:android:afa1760e7dcad3259d0cc9",
  databaseURL: "https://bollywood-songs-ai-default-rtdb.firebaseio.com",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Настройка Auth с сохранением сессии
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getDatabase(app);
