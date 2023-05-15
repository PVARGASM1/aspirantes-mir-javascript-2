/*Crear una función join que reciba un arreglo y retorne un string con todos los elementos 
separados por espacio sin usar el método join de los arreglos*/

function join (array){

 let revisa = "";

for (let i= 0; i<array.length; i++){
 
 revisa = revisa + array[i] + " ";
}
return revisa;
}
console.log (join (["crear", "desarrollar", "innovar"]))
console.log (join (["html", "JS", "CSS", "Pyton"]))
console.log (join (["blanco", "rosado", "amarillo", "verde"]))