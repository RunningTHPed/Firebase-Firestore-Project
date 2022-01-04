// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN1qVXpimTlNQ-uNqsJ66aH-kHzkqCnLE",
  authDomain: "yt-firebase-161f0.firebaseapp.com",
  projectId: "yt-firebase-161f0",
  storageBucket: "yt-firebase-161f0.appspot.com",
  messagingSenderId: "270442921632",
  appId: "1:270442921632:web:3683c0fa232f7debe813c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getStudent(db) {
    const Student = collection(db, 'Student');
    const StudentSnapshot = await getDocs(Student);
    const StudentList = StudentSnapshot.docs.map(doc => doc.data());
    return StudentList;
  }
  const Student = await getStudent(db)

  console.log(Student)
  console.log(Student[0].name)