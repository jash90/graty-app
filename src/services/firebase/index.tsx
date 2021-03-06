import { initializeApp } from "firebase/app"
import { addDoc, collection, getDocs, getFirestore, } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

const db = getFirestore(app);

const storage = getStorage();

const auth = getAuth();



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



export const getCollection = async (key: string, defaultIcon = "") => {
    let data: any, error: any;

    try {
        data = await getDocs(collection(db, key));


        data = data.docs.map((doc: any) => {
            return { ...doc.data(), uid: doc.id };
        })

        for (let x = 0; x < data.length; x++) {
            data[x].link = await getLink(data[x].id, defaultIcon);
        }

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

    } catch (err) {
        error = err;

    }

    return { data, error };

}

export const getLink = async (key: string, defaultIcon = "") => {
    let data: any;

    try {
        data = await getDownloadURL(ref(storage, key));

    } catch (err) {
        data = defaultIcon;
    }


    return data;

}

export const signUp = async (email: string, password: string): Promise<{ data: any, error: any }> => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredentials.user, error: '' }
    } catch (error) {
        return { data: '', error }
    }
}

export const signIn = async (email: string, password: string): Promise<{ data: any, error: any }> => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        let admins: any = await getCollection("admins")
        admins = admins.data.map((admin: any) => admin.id)
        return { data: { ...userCredentials.user.toJSON(), admin: admins.includes(userCredentials.user.uid) }, error: null }
    } catch (error) {
        return { data: null, error }
    }
}