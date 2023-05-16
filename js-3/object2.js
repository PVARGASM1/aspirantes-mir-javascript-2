let persona = {
    nombre: "Carlos Joya", 
    edad: 35, 
    ciudad: "Bogota",
    profesion: "Ingeniero",
    presentación: function (){
        console.log("Hola, me llamo " + this.nombre + " tengo " + this.edad + " años y vivo en " + this.ciudad)
    }
}
console.log(persona)
 
persona.presentación();
let mensaje = persona.presentación();
console.log(mensaje)

persona.hobbies =["montar patines", "montar bici", "leer"]
console.log(persona.hobbies)

let hobbies = Object.values(persona.hobbies)

for (let i = 0; i <persona.hobbies.length; i++){
    console.log(hobbies[i]);
}
