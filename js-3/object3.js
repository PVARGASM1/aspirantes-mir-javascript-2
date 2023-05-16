let receta = {}

receta.nombre = "Sandwich"

receta.ingredientes = []

receta.ingredientes.uno = {
    nombre: "Pan",
    cantidad: 2
}
receta.ingredientes.dos ={
    nombre: "Queso",
    cantidad: 1
}
console.log(receta.ingredientes.uno.nombre)

let sumaCantidad = receta.ingredientes.uno.cantidad + receta.ingredientes.dos.cantidad

console.log(sumaCantidad)
