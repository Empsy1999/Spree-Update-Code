import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadString } from 'firebase/storage';
import { environment } from 'src/environments/environment';

interface User {
  name: String;
  email: String;
  password: String;
  image?: String
}

const firebaseConfig = {
  apiKey: 'AIzaSyDL7Q9Ys8fclVj0nZeW9Ikx9c4nOXHke8Y',
  authDomain: 'safe-tracker-app-89874.firebaseapp.com',
  projectId: 'safe-tracker-app-89874',
  storageBucket: 'safe-tracker-app-89874.appspot.com',
  messagingSenderId: '809549137119',
  appId: '1:809549137119:web:222ef673bdcee21cf3d56a',
  measurementId: 'G-74BKSFCDZQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db = getDatabase(app);
const firestoredb = getFirestore(app);


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }


  checkIfEmailExist = async (email: string) => {
    const q = query(collection(firestoredb, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let docs = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      docs.push(doc)
    });

    return !!docs.length;
  }

  signupNewUser = async (data: User) => {
    await addDoc(collection(firestoredb, "users"), {
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image
    });
  }

  uploadImage = async (fileContent: string, name: string ) => {
    let filePath = 'users/' + Date.now() + '_' + name;
    const storageRef = ref(storage, filePath);

    await uploadString(storageRef, fileContent, 'data_url');

    return environment.firebaseBucketUrl + filePath;
  }

  checkIfUserExist = async (email: string, password: string) => {
    const q = query(collection(firestoredb, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc: any) => {
      console.log(doc.id, " => ", doc.data());
      const data = doc.data();
      if (data.password === password) {
        user = data;
      }
    });

    return user;
  }
}
