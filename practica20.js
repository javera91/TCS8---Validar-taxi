'use strict'
let vehicle = {
    brand: "Hyundai",
    model: "Getz",
    yearManufacture: 2003,
    transmission: "Manual",
}

function validateTaxi(vehicle) {
    let currentYear = 2023;
    let years = currentYear - vehicle.yearManufacture;
    
    if(years<10){
        return true;
    }
    else{
        return false;
    }
  }

  let result = validateTaxi (vehicle);
  alert(`Su vechículo es apto para trabajar: ${result}.`);
