const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

let inputValue = 0

convertBtn.addEventListener("click", function() {
    inputValue = Number(inputEl.value)

    // Length conversion
    const lengthInFeet = inputValue * 3.28084
    const lengthInMeters = inputValue / 3.28084
    lengthOutput.textContent = `${inputValue} meters = ${lengthInFeet.toFixed(3)} feet | ${inputValue} feet = ${lengthInMeters.toFixed(3)} meters`

    // Volume conversion
    const volumeInGallons = inputValue * 0.264172
    const volumeInLiters = inputValue / 0.264172
    volumeOutput.textContent = `${inputValue} liters = ${volumeInGallons.toFixed(3)} gallons | ${inputValue} gallons = ${volumeInLiters.toFixed(3)} liters`

    // Mass conversion
    const massInPounds = inputValue * 2.20462
    const massInKilograms = inputValue / 2.20462
    massOutput.textContent = `${inputValue} kilograms = ${massInPounds.toFixed(3)} pounds | ${inputValue} pounds = ${massInKilograms.toFixed(3)} kilograms`
})

