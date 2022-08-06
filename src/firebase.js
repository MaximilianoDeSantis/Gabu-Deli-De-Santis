import { initializeApp } from "firebase/app";
import products from './products.json'
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOmDpttHaNWtHdV1efNCaCm1KLrHxZs3A",
  authDomain: "gabu-deli-proyectoreactcoder.firebaseapp.com",
  projectId: "gabu-deli-proyectoreactcoder",
  storageBucket: "gabu-deli-proyectoreactcoder.appspot.com",
  messagingSenderId: "126107637041",
  appId: "1:126107637041:web:34345c2eec649d530bcc10"
};

export const setInfo = () => {
  // addDoc(collection(db,'items'),{
  //   title: "Testing",
  //   category: "Testing",
  //   description: "Testing",
  //   image: "Testing",
  //   price: 2323
  // }).then(console.log("hola")).catch(err => {console.log(err)})
 
  products.forEach(product =>{
    
    addDoc(collection(db,'items'),{
      id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      image: product.image,
      price: product.price
    })

    


  })

}



// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app) // Obtiene la base de datos creada


 export const getDetailItem = (id) => {
  // id = '9WIMYqF8OU462FpSXeNE'
  const docRef = doc(db, 'items', id); //referencia a el document
  return getDoc(docRef);

};



export const getItems = () => {
    const colRef = collection(db, 'items'); // referencia a la collection
    const q = query(colRef);
    return getDocs(q);
  };



export const getItemsFiltered = (category) => {
    const colRef = query(collection(db, 'items')) // referencia a la collection
    const q = query(colRef, where("category", "==", category));
    return getDocs(q);
  };

/**   

 LLENAR LA BASE DE DATOS
  setInfo()
  

*/
