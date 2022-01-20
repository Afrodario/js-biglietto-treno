let kmNumber = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
let passengerAge = parseInt(prompt("Quanti anni hai?"));

let pricePerKm = 0.21;

let ticketPrice = kmNumber * pricePerKm;

if (passengerAge < 18) {
    discountTicket = ((ticketPrice * 20) / 100); 
    document.getElementById("price_result").innerHTML = (ticketPrice - discountTicket).toFixed(2); 
} else if (passengerAge > 65) {
    document.getElementById("price_result").innerHTML = "IN QUALE SISTEMA NUMERICO?"; 
} else {
    document.getElementById("price_result").innerHTML = "E VABBEH"; 
}

