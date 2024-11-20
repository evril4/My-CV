// Created: 7D
import { initializeApp } from "firebase/app";   
import { getDatabase, ref, get } from "firebase/database"; 
  
// For Firebase JS SDK v7.20.0 and later 
const firebaseConfig = {
  apiKey: "AIzaSyADcFX9Uer7Q9OK6JLDCg6VaFfq8z1U4yc",
  authDomain: "teting-57a3e.firebaseapp.com",
  databaseURL: "https://teting-57a3e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teting-57a3e",
  storageBucket: "teting-57a3e.firebasestorage.app",
  messagingSenderId: "909174855816",
  appId: "1:909174855816:web:608e8bef083669a176673d",
  measurementId: "G-DVS6XG24X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

export { database, ref, get };