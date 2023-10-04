function getHousesPrototype() {

    var Apartment = new Map()
  
    Apartment.set("Apartment75008", 90)
    Apartment.set("Apartment94300", 105)
    Apartment.set("Apartment92300", 140)
    Apartment.set("Apartment75015", 65)
    
    return Apartment 
  }
  
  console.log(getHousesPrototype());