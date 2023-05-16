const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda: function () {
        console.log("Hola, me llamo" + " " + this.nombre)
    }
}
console.log(pedro.edad)

pedro.estutura = 1.8;


delete pedro.activo;

let valores = Object.values(pedro)
let llaves = Object.keys(pedro)

for (let i = 0; i < valores.length; i++) {
    console.log(llaves[i] + ":" + valores[i])
}
console.log(pedro.saluda())


