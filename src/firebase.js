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
  apiKey: "AIzaSyDa_xyzTz1rLABm4wbK5i93UX3DWt3DXRw",
  authDomain: "gabu-deli.firebaseapp.com",
  projectId: "gabu-deli",
  storageBucket: "gabu-deli.appspot.com",
  messagingSenderId: "333966301507",
  appId: "1:333966301507:web:11c3b7f2bab2e5e0e677f6"
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



export const setBuy = (order) => {
      console.log(order)
      addDoc(collection(db, 'DataBuyer'),{
        order
    }).then((doc)=> {alert(`Compra exitosa!
    El ID de su pedido es: ${doc.id}`)})

  // Crea objeto para guardar Datos Cliente e Items comprados
  // const items = {}
  // items.clientData = {name: 'Nombre Cliente',
  //                     lastName: 'Apellido',
  //                     email: 'nombre@gmail.com',
  //                     address: 'address1',
  //                     }
  // items.cart = cart.map(item => item)



  // addDoc(collection(db, 'DataBuyer'),{
  //   items
  // })

  // alert('Compra Exitosa')


}

  


/**   

  

 // LLENAR LA BASE DE DATOS
 // setInfo()
  

*/
