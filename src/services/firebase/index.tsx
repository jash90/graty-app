import { initializeApp } from "firebase/app"
import { addDoc, collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User as UserFirebase } from "firebase/auth";
import { User } from "../../models/User";



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



export const getCollection = async (collectionName: string, defaultIcon = "") => {
    let data: any, error: any;

    try {
        data = await getDocs(collection(db, collectionName));


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

export const getDocument = async (collectionName: string, documentName: string) => {
    let data: any, error: any;

    try {
        const docRef = doc(db, collectionName, documentName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { data: docSnap.data(), error: null };
        } else {
            return { data: null, error: new Error("Document not exits") };
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

export const signUp = async (email: string, password: string): Promise<{ data: object|null, error: any }> => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredentials.user.toJSON(), error: null }
    } catch (error:any) {
        return { data: null, error }
    }
}

export const signIn = async (email: string, password: string): Promise<{ data: User | null, error: any }> => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        let { data } = await getDocument("users", userCredentials.user.uid)
        return { data: { ...userCredentials.user.toJSON(), ...data }, error: null }
    } catch (error) {
        return { data: null, error }
    }
}

export const logout = async (): Promise<{ error: any }> => {
    try {
        await signOut(auth);
        return { error: null }
    } catch (error) {
        return { error }
    }
}