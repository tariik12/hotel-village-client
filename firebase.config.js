import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCLsTYQC15IbW_xaHnB9EdrgMT72L-jllk",
    authDomain: "hotel-village.firebaseapp.com",
    projectId: "hotel-village",
    storageBucket: "hotel-village.appspot.com",
    messagingSenderId: "606536897247",
    appId: "1:606536897247:web:930ccd326859913bd44f6a"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
