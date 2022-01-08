import { initializeApp } from "firebase/app"
import { addDoc, collection, DocumentData, getDocs, getFirestore, QuerySnapshot, } from "firebase/firestore"
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const addDocument = async (key: string, data: object) => {
    let doc, error, loading = true;
    try {
        doc = await addDoc(collection(db, key), data);
    } catch (e) {
        error = e;
    }
    finally {
        loading = false;
    }
    return { doc, error, loading }
}



export const getCollection = async (key: string) => {
    let data: any[] = [], querySnapshot: any, error: any;

    try {
        querySnapshot = await getDocs(collection(db, key));


        querySnapshot = querySnapshot.docs.map((doc: any) => {
            return doc.data();
        })

    } catch (err) {
        error = err;
    }


    return { data: querySnapshot, error };

}