
function mostrar()
{

let edad;
let sexo;
let sueldo;
let puesto;
let seguir;
let acumSueldoP = 0;
let contSueldoP = 0;
let acumSueldoA = 0;
let contSueldoA = 0;
let acumSueldoQ = 0;
let contSueldoQa = 0;
let promedioSueldoP = 0;
let promedioSueldoA = 0;
let promedioSueldoQ = 0;
let flagMaxSueldo = 1;
let flagSueldoF = 1;
let contPNB = 0;
let sexoMaxS;
let maxSueldo;
let nombreMaxSueldo;
let maxSueldoF;


do
{
    nombre = prompt('Ingrese un nombre: ').toLowerCase();
	    
	edad = parseInt(prompt("Ingrese edad: (entre 18/99): "))
	    while (isNaN(edad) || edad < 18 || edad >99){
		edad = parseInt(prompt("Error, ingrese edad valida (entre 18 y 99): "));
	}

    sexo = prompt("Ingrese sexo (m = masculino, f = femenino y nb = no binario): ");
		while(sexo != "m" && sexo != "f" && sexo != "nb"){
		sexo = prompt("Error. Ingrese el sexo valido: ");
    }

    puesto = prompt("Ingrese puesto (programador, analista, Qa): ".toLowerCase();
       while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
           puesto = prompt("Error. Ingrese puesto valido (programador, analista, Qa): ");
    } 

     sueldo = parseInt(prompt("Ingrese sueldo (entre $15000 y $ 70000): "));
         while (isNaN(sueldo) ||sueldo < 15000 || sueldo > 70000){				
            sueldo = prompt("Error. Ingrese sueldo valido. Entre $15000 y $70000.");
    }	

      // A

         switch (puesto){
            case "analista":
            acumSueldoA = sueldo;
            contSueldoA ++
            break;

            case "Qa":
            acumSueldoQ = sueldo;
            contSueldoQ ++
            break;

            case "programador":
            acumSueldoP = sueldo;
            contSueldoP ++
            break;
    
        }

        //FIN DEL SWITCH

        //  B

        if(flagMaxSueldo || maxSueldo < sueldo){
            maxSueldo = sueldo;
            sexoMaxS = sexo;
            flagMaxSueldo = 0;

        }

        //  C 

        if(flagSueldoF || sexo == "f" && sueldo > maxSueldoF ){
            nombreMaxSueldo = nombre;
            maxSueldoF = sueldo;
            flagSueldoF = 0;
        }
        
        // D

      if(sexo == 'nb' && puesto == 'programador' && (sueldo <= 55000 && sueldo >= 20000)){
			contPNB ++;
        }


// FIN DO WHILE

    seguir = prompt("¿Desea continuar? si/no")

}while(seguir == "si");



// A
if ( contSueldoQ != 0 ){
    promedioSueldoQ = acumSueldoQ / contSueldoQ;

}if(contSueldoP != 0){
    promedioSueldoP = acumSueldoP / contSueldoP;

}if( contSueldoA != 0){
    promedioSueldoA = acumSueldoA / contSueldoA;

}


 console.log ("El promedio de sueldo de los Qa es: " + promedioSueldoQ )
 console.log ("El promedio de sueldo de los analistas es: " + promedioSueldoA ) 
 console.log ( "El promedio del sueldo de los programadorxs: " + promedioSueldoP )




// B

console.log("El sexo con el mayor sueldo es " + sexoMaxS + " con: $" + maxSueldo ) 


// C
 if (sexo == "f"){
     console.log("El nombre de la mujer con el sueldo mas alto se llama " + nombreMaxSueldo)
 }
 else{
    console.log("No se ingresaron empleadxs femeninos")
 }

 // D

 if(sexo == "nb" && puesto  == "programador"){ 
     console.log("La cantidad de programadores no binarixs que cobras sueldos entre $20000 y $55000" + contPNB)

 }else{
     console.log("No se ingresaron programadores no binarixs")
 }

}
