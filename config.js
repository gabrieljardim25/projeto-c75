import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCG-taViNSwbDSJdSrQ_VbiG-Hj0JILaSE",
  authDomain: "ciclista-eletronico-51870.firebaseapp.com",
  projectId: "ciclista-eletronico-51870",
  storageBucket: "ciclista-eletronico-51870.appspot.com",
  messagingSenderId: "641751010459",
  appId: "1:641751010459:web:51e82493d9155ffd858a3e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

