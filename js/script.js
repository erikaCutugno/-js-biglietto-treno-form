// DOM
const formElm = document.getElementById("form")
const fullNameElm = document.getElementById("fullName")
const userKmElm = document.getElementById("userKm")
const userAgeElm = document.getElementById("userAge")
// DOM HIDDEN
const cardElm = document.getElementById("card")
const passengerElm = document.getElementById("passenger")
const offerElm = document.getElementById("offer")
const priceElm = document.getElementById("price")





formElm.addEventListener("submit", function(event){
    event.preventDefault();
    passengerElm.innerHTML = fullNameElm.value;
    const price = 0.21 * userKmElm.value;

//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.

    const priceYoung = price - (price * 0.2);
    const priceOld = price - (price * 0.4);
    if (userAge.value == "Minorenne"){
        priceElm.innerHTML  = `${priceYoung.toFixed(2)}€`;
        offerElm.innerHTML = "Biglietto Young"
    } else if (userAge.value == "over 65"){
        priceElm.innerHTML = `${priceOld.toFixed(2)}€`;
        offerElm.innerHTML = "Biglietto Over 65"
    } else{
        priceElm.innerHTML = `${price.toFixed(2)}€`;
        offerElm.innerHTML = "Biglietto Standard"
    }
    cardElm.classList.remove("hidden");
})