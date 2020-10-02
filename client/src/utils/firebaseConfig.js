import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbgo9jNjZCXKVomS_IY0p5V8CG6VBmpKM",
  authDomain: "my-blog-21acb.firebaseapp.com",
  databaseURL: "https://my-blog-21acb.firebaseio.com",
  projectId: "my-blog-21acb",
  storageBucket: "my-blog-21acb.appspot.com",
  messagingSenderId: "543182037778",
  appId: "1:543182037778:web:17497045925635bea3c9cb",
  measurementId: "G-8F2LKBT5W6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
