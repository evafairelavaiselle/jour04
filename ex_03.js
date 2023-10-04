function fillBus(peopleAtBusStops, busSeats) {
    let totalPeople = 0;
    for (let i = 0; i <= peopleAtBusStops.length; i++) {
      totalPeople += peopleAtBusStops[i];    
      if (totalPeople >= busSeats) {
        return i+1 ;
      }
    }
    return -1; 
  }
  
   
  
  console.log(fillBus([1, 3, 10, 1], (12)));