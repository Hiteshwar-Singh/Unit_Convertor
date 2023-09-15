// javascript
//  1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
const inputVal = document.querySelector("#input-field")
const unit1Cal = document.querySelector("#unit1-cal")
const unit2Cal = document.querySelector("#unit2-cal")
const unit3Cal = document.querySelector("#unit3-cal")

inputVal.addEventListener("input", adjustWidth);
function adjustWidth(){
    var value = inputVal.value
    var width = value.length * 50
    inputVal.style.width = width + "px";
}
function length(){
    let result1 = (inputVal.value) * 3.281
    let result2 = (inputVal.value) / 3.281
    // console.log(result1 +"  "+ (result2).toFixed(3))
    unit1Cal.innerHTML = `${inputVal.value} meters = ${(result1).toFixed(3)} feet | ${inputVal.value} feet = ${(result2).toFixed(3)} meters`
}

function volume(){
    let result1 = (inputVal.value) * 0.264
    let result2 = (inputVal.value) / 0.264
    // console.log(result1 +"  "+ (result2).toFixed(3))
    unit2Cal.innerHTML = `${inputVal.value} liters = ${(result1).toFixed(3)} gallons | ${inputVal.value} gallons = ${(result2).toFixed(3)} liters`
}

function mass(){
    let result1 = (inputVal.value) * 2.204
    let result2 = (inputVal.value) / 2.204
    // console.log(result1 +"  "+ (result2).toFixed(3))
    unit3Cal.innerHTML = `${inputVal.value} kilos = ${(result1).toFixed(3)} pounds | ${inputVal.value} pounds = ${(result2).toFixed(3)} kilos`
}
