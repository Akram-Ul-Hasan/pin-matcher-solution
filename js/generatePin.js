function createPin(){
    const pin = Math.round(Math.random()*1000000);
    const pinString = pin + '';

    if(pinString.length === 6)
        return pin;
    else
     return createPin();
}


document.getElementById('btn-generate-pin').addEventListener('click', function(){
    const generatePinOutputField = document.getElementById('generate-pin-output-field');
    const pin = createPin();
    generatePinOutputField.value = pin;
})
