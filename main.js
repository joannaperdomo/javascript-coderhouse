
// Variables
let inversion = parseInt(prompt('¿Cuánto quieres invertir?'));
let añosInversion = parseInt(prompt('¿Por cuánto tiempo quieres invertir?'));

// Bucle para calcular la ganancia por años de inversión

for (let i = 1; i <= añosInversion; i++){
    let ganancia = inversion * 0.10;
    inversion = Math.round(ganancia + inversion);
    console.log(`En tu año ${i} habrás ganado ${inversion} pesos`);
}