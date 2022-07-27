import db from './firebase.js'


const usuarios = {
    nombre: "Maxmiliano",
    activo: true,
    numero: 7
}


db.collection(usuarios)