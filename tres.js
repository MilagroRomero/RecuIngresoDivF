function mostrar()
{

  let nombre;
  let cantidad;
  let marca;
  let precioUnidad;
  let importe;
  let descuento;
  let precioTotal = 0;
  let acumL = 0;
  let acumA = 0;
  let contA = 0;
  let acumI = 0;
  let contI = 0;
  let acumF = 0;
  let contF = 0;
  let promA = 0;
  let promI = 0;
  let promF = 0;
  let MasVentasMarca;
  let seguir;

  do {
    nombre = prompt("Ingrese nombre: ");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Ingrese nombre valido: ").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese cantidad de lamparas:"));

    marca = prompt("Ingrese marca (felipelamparas, argentinaluz, illuminatis):").toLowerCase();
    while (marca != "Felipelamparas" && marca != "argentinaluz" && marca != "alluminatis" ) {
      marca = prompt("Error. ingrese marca valida (felipelamparas, argentinaluz, illuminatis):");
    }

    precio = parseInt(prompt("Ingrese precio:"));
    while (isNaN(precio) || precio <= 0) {
      precio = parseInt(prompt("Error. Ingrese precio valido"));
    }



//A
    importe = precio * cantidad;
    precioTotal += importe;

 //B
    acumL += cantidad;

    //C
    if (marca == "felipelamparas") {
      acumF += cantidad;
      contF++;
    } else if (marca == "argentinaluz") {
      acumA += cantidad;
      contA++;
    } else {
      acumI += cantidad;
      contI++;
    }

  // FIN DO WHILE 

  seguir = prompt("Deseaa continuar? si/no ");
  while (seguir == "si");

  if (marca == "felipelamparas" && acumL > 5) {
    descuento = 0.1;
  } else if (marca == "argentinaluz" && acumL >= 3) {
    descuento = 0.05;
  } else {
    descuento = 0;
  }


//A

  console.log("La empresa recaudo en concepto de todas las ventas realizadas: $" + precioTotal);


//B


  if (descuento != 0) {
    console.log("La empresa perdio en concepto de descuentos: " + descuento);
  } else { console.log("La empresa no sufrio perdidas"); 

  }


//C

  if (contI != 0) {
    promI = acumI / contI;
    console.log("el promedio de cantidad de lamparas vendidas de illuminatis es " + promI);
  }
  if (contF != 0) {
    promF = acumF / contI;
    console.log("El promedio de cantidad de lamparas vendidas de felipelamparas  es " + promF);
  }
  if (contA != 0) {
    promA = acumA / contA;
    console.log("El promedio de cantidad de lamparas vendidas de argentinaluz es " + promA);
  }



//D

  if (contA > contF && contA > contI) {
    MasVentasMarcas = "argentinaluz";
  } else if (contF >= contA && contF > contI) {
    MasVentasMarca = "felipelamparas";
  } else {
    MasVentasMarca = "illuminatis";
  }
  console.log("La marca que mas ventas relizó es:  " +    MasVentasMarca );
}

	
}
