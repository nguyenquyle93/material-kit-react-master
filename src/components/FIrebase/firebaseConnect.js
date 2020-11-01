import firebase from 'firebase/app'
import { functions } from 'firebase';

var firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyANJCeO-UmWhgYXnpY2PpynG4ctS8Uhw7Q",
  authDomain: "casi-d6696.firebaseapp.com",
  databaseURL: "https://casi-d6696.firebaseio.com",
  projectId: "casi-d6696",
  storageBucket: "casi-d6696.appspot.com",
  messagingSenderId: "898945885065",
  appId: "1:898945885065:web:aaa2489ac7cb116201f758"
=======
    apiKey: "AIzaSyAepYvU1BivlITK2fc32n1SQQTYzjRoV9E",
    authDomain: "material-kit-cec6e.firebaseapp.com",
    databaseURL: "https://material-kit-cec6e.firebaseio.com",
    projectId: "material-kit-cec6e",
    storageBucket: "material-kit-cec6e.appspot.com",
    messagingSenderId: "979964379147",
    appId: "1:979964379147:web:8572fc9d3056d0d371c70e",
    measurementId: "G-LVWW5NVD35"
>>>>>>> cedb8b015adbd7bcbb460f467e839cc1efb66963
};
  // Initialize Firebase


  export const firebaseConnect = firebase.initializeApp(firebaseConfig);
  // sữa dử liệu nè
  // data.set({
  //     id:3,
  //     title: " ngày hôm nay",
  //     content: " hahaha cái quần quề",
  // })

  export const connectData = firebase.database().ref('pages1');
  export const connectData2 = firebase.database().ref('pages2');
  export const connectData3 = firebase.database().ref('pages3');
  export const connectData4 = firebase.database().ref('pages4');
  export const connectData5 = firebase.database().ref('pages5');
  export const connectData6 = firebase.database().ref('pages6');
  export const connectData7 = firebase.database().ref('pages7');
  export const newPost = firebase.database().ref('newPost');