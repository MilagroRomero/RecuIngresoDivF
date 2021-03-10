function mostrar()
{
  let nombre;
  let edad;
  let sexo;
  let materias;
  let carrera;
  let notaProm;
  let NotaFisicaMax;
  let nombreNotaFisicaMax;
  let edadJovenAlumna;
  let nombreJovenAlumna;
  let flagMejorFisica = 1;
  let flagJovenAlumna = 1;
  let contTotalAlum = 0;
  let contQ = 0;
  let porcentajeQ;
  let contF = 0;
  let porcentajeF; 
  let contS = 0;
  let porcentajeS;
  let flagMaterias = 1;
  let materiasMax;
  let nombreMateriasMax;
  let edadMateriasMax;


    for ( let i = 0; i < 2 ; i++ ){

        nombre = prompt('Ingrese nombre');

         edad = prompt('Ingrese edad');
	while (isNaN(edad) || edad < 18 || edad >99){

    edad = prompt('Error, ingrese edad valida');
	}
	  sexo = prompt("Ingrese sexo (m = masculino, f = femenino y nb = no binario):");
		while(sexo != "m" && sexo != "f" && sexo != "nb"){
		sexo = prompt("Error. Ingrese sexo valido: ");
	   }
	   materias = parseInt(prompt("Ingrese cantidad de materias: "));
		while (isNaN (materias) < 1 || materias > 5 ||){				
			materias = prompt("Error. Ingrese cantidad de materias (entre 1 y 5)");
		}
        carrera = prompt("Ingrese carrera (quimica, fisica y sistemas): ").toLowerCase();
	while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
		carrera = prompt("Error. Ingrese carrera valida: ");
	}
    notaProm = parseInt(prompt("Ingrese su nota promedio (Entre 0 y 10): "));
    while (isNaN(notaProm) ||notaProm < 0  && notaProm >= 10){				
        notaProm = prompt("Error. Ingrese nota promedio valida (Entre 0 y 10)");
    }
   


// A  

if(carrera == "fisica" && (flagMejorFisica || notaProm > NotaFisicaMax)){
    NotaFisicaMax = notaProm;
    nombreNotaFisicaMax = nombre;


    flagMejorFisica = 0;
}


 //B 

    if(sexo == "f"){
		if(flagJovenAlumna || edad < edadJovenAlumna){
			edadJovenAlumna = edad;
			nombreJovenAlumna = nombre;
			
			flagJovenAlumna = 0;
		}
	}
    

//C 

    switch(carrera){
        case "quimica":
        contQ ++
        break;

        case "fisica":
        contF ++
        break;

        case "sistemas":
        contSistemas ++
        break;

    }  contTotalAlum++ 


// FIN DEL SWITCH

// D
   
    if(carrera != "quimica" && (flagMaterias == 1 || MateriasMax < materias) ){
        nombreMateriasMax = nombre;
        materiasMax = materias;
        edadMateriasMax = edad;
        
        flagMaterias = 0;

    }

    }
    // FIN DEL FOR



 //  A
    if(flagMejorFisica == 0){
        console.log("El alumnx con la mejor nota de fisica es: " + nombreNotaFisicaMax + " y su nota es:  " + NotaFisicaMax)
    }else{
        console.log("No se registraron alumnxs de fisica");
    }

//B
    if(flagMujerJoven == 0){
        console.log("La alumna mas joven se llama " + nombreJovenAlumna + " y tiene " + edadJovenAlumna + " años")
    }else{
        console.log("No se registraron alumnas")
    }

 // C
    porcentajeQ = (contQ * 100) / contTotalAlum;
    porcentajeS = (contS * 100) / contTotalAlum;
    porcentajeF = (contF * 100) / contTotalAlum;

    if(carrera == "quimica"){
    console.log("El porcentaje de alumnxs que estudian quimica son: " + porcentajeQ)
    }else{
        console.log("No se registraron estudiantes de quimica.")
    }

    if(carrera == "sistemas"){
    console.log("El porcentaje de alumnxs que estudian sistemas son: " + porcentajeS)
    }else{
        console.log("No se registraron estudiantes de sistemas: ")
    }   
    if(carrera == "fisica"){
    console.log("El porcentaje de alumnxs que estudian fisica son: " + porcentajeF)
    }
    else{
        console.log("No se registrano estudiantes de fisica.")
    }


// D
    if(flagMaterias = 0){
        console.log("La edad del estudiante que cursa mas materias es: " + edadMateriasMax +" años" +  " y su nombre es: " +nombreMateriasMax)
    }

}
