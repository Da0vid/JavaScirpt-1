//Declaracion de variables tipo Let
let Nombre = 'David'; let Apellido = 'Sánchez'; let Saludo = 'Hola'; let Edad = 19; 
let Numero1 = 5; let Numero2 = 10; let Numero3 = 2; let suma,multiplicacion; let Bienvenida;

//Operaciones con variables Let
Bienvenida = `${Saludo} ${Nombre} ${Apellido}, Bienvenido`;
suma = Numero1 + Numero2 + Numero3;
multiplicacion = Numero1*Numero2*Numero3;
console.log(Bienvenida);

//Uso del operador Ternario con variables Let
let Mayor20 = (Edad > 20) ? `${Nombre} es mayor de 20 años` : `${Nombre} no es mayor de 20 años`;
console.log(Mayor20);

//Declaracion de variables Const
const pi = 3.1416; 
const GravedadTierra = 9.8; 
const GravedadMarte = 3.71 
const GravedadJupiter = 24.79;
const GravedadMercurio = 3.7;       
const GravedadVenus = 8.87;         
const GravedadSaturno = 10.44;      
const GravedadUrano = 8.69;         
const GravedadNeptuno = 11.15;

//Operacion con Const
let radio = 5;
let Area = (radio*radio)*pi;

//Operador Ternario con const

let MGravedad = (GravedadJupiter>GravedadTierra) ? `Jupiter tiene más gravedad que la Tierra` : `La Tierra tiene más gravedad que Jupiter`

let MayorGravedad = ( 
    GravedadJupiter > GravedadMercurio && 
    GravedadJupiter > GravedadVenus &&
    GravedadJupiter > GravedadTierra &&
    GravedadJupiter > GravedadMarte &&
    GravedadJupiter > GravedadSaturno &&
    GravedadJupiter > GravedadUrano &&
    GravedadJupiter > GravedadNeptuno) ? `Jupiter es el planeta con mas gravedad del sistema solar, tiene ${GravedadJupiter}` : `Jupiter no es el planeta con mas gravedad del sistema solar`
    console.log(MayorGravedad)
    console.log(Area)