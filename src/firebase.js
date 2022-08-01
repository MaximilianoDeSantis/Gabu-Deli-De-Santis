import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOmDpttHaNWtHdV1efNCaCm1KLrHxZs3A",
  authDomain: "gabu-deli-proyectoreactcoder.firebaseapp.com",
  projectId: "gabu-deli-proyectoreactcoder",
  storageBucket: "gabu-deli-proyectoreactcoder.appspot.com",
  messagingSenderId: "126107637041",
  appId: "1:126107637041:web:34345c2eec649d530bcc10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app) // Obtiene la base de datos creada




export const fetchItemsByCategory = async (category) => {
  const itemCollection = collection(db, "items");
  const q = query(itemCollection, where("category", "==", category));
  console.log(q)
  return await getDocs(q);

}

export const getProducts = async () => {
  const itemCollection = collection(db, "items");

  const q = query(itemCollection);

  return await getDocs(q);
};