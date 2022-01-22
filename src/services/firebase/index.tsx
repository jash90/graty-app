import { initializeApp } from "firebase/app"
import { addDoc, collection, getDocs, getFirestore, } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
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

export const storage = getStorage();



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
    let data: any, error: any;

    try {
        data = await getDocs(collection(db, key));

        data = data.docs.map((doc: any) => {
            let link = "https://cdn-icons-png.flaticon.com/512/3430/3430778.png"
            getLink(doc.id).then(image => {
                if (!!image?.data) {
                    link = image.data

                    console.log("dupa", image.data)
                }
            }).catch(error => {
                console.log("dupa", error)

            })

            return { ...doc.data(), id: doc.id, link };

        })

    } catch (err) {
        error = err;
    }


    return { data, error };

}

export const addImage = async (key: string, file: any) => {
    let data: any, error: any;
    try {
        const storageRef = ref(storage, key);

        data = await uploadBytes(storageRef, file);

        console.log('Uploaded a blob or file!', data);

    } catch (err) {
        error = err;

    }

    return { data, error };

}

export const getLink = async (key: string) => {
    let data: any, error: any;

    try {
        data = await getDownloadURL(ref(storage, key));

    } catch (err) {

    }


    return { data, };

}