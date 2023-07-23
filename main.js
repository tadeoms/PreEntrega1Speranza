const intereses = (x) => x*1.67;
const gastosAdm = (x) => x*0.07;
const suma = (a,b) => a+b;


let monto = parseInt(prompt("Ingrese el monto que desea solicitar"));
    if (monto > 0) { 
        console.log ("monto mayor a 0");
    } else {
        let monto = parseInt(prompt("Ingrese el monto que desea solicitar"));   
    }
let cuotas = parseInt(prompt("Ingrese en cuantas cuotas desea pagar"));
let montoFinal = suma (suma (intereses(monto),gastosAdm (monto)),monto);
let valorCuota = montoFinal/cuotas;

alert (`Usted debera pagar ${montoFinal} en ${cuotas} cuotas de ${valorCuota}`);

for (let i = 1; i <= cuotas; i++) {
    alert (`El valor de la cuota ${i} es de ${valorCuota}`)
};
