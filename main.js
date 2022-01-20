let kmNumber = parseInt(prompt("Quanti chilometri vuole percorrere?"));
let passengerAge = parseInt(prompt("Quanti anni ha?"));

const pricePerKm = 0.21;

let ticketPrice = kmNumber * pricePerKm;

if (passengerAge < 18) {
    discountTicket = ((ticketPrice * 20) / 100); 
    document.getElementById("price_result").innerHTML = "Il costo del suo biglietto è di " + (ticketPrice - discountTicket).toFixed(2) + "€";
    document.getElementById("info").innerHTML = "E' stato applicato uno sconto del 20% per under 18"; 
} else if (passengerAge > 65) {
    discountTicket = ((ticketPrice * 40) / 100); 
    document.getElementById("price_result").innerHTML = "Il costo del suo biglietto è di " + (ticketPrice - discountTicket).toFixed(2) + "€";
    document.getElementById("info").innerHTML = "E' stato applicato uno sconto del 40% per over 65"; 
} else {
    document.getElementById("price_result").innerHTML = "Il costo del suo biglietto è di " + ticketPrice.toFixed(2) + "€";
    document.getElementById("info").innerHTML = "Buon viaggio!";
}

