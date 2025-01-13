
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCT7GnspWDZRRgr2IKWK5hk7tapPylO1MQ",
    authDomain: "test-app-93521.firebaseapp.com",
    projectId: "test-app-93521",
    storageBucket: "test-app-93521.firebasestorage.app",
    messagingSenderId: "921933572196",
    appId: "1:921933572196:web:28de0360d9ab8537cc1771",
    measurementId: "G-YSTM1GZK67"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);

export default app
