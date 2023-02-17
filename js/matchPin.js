document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const matchPinOutputField = document.getElementById('match-pin-output-field');

    if(isNaN(number)){
        if(number==='C'){
            matchPinOutputField.value = '';
        }
        else if(number==='<'){
            const typedNumberString = matchPinOutputField.value;
            const typedNumber = typedNumberString.split('');
            typedNumber.pop();
            const typedPin = typedNumber.join('');
            matchPinOutputField.value = typedPin;
        }
    }
    else{
        const previousMatchPin = matchPinOutputField.value;
        const currentMatchPin = previousMatchPin + number; 
        matchPinOutputField.value = currentMatchPin;
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const generatedPin = document.getElementById('match-pin-output-field');
    const matchedPin = document.getElementById('generate-pin-output-field');
    const pinSuccess = document.getElementById('pin-success');
    const pinfailure = document.getElementById('pin-failure');
    if(generatedPin.value === matchedPin.value)
    {
        
        pinSuccess.style.display= 'block';
        pinfailure.style.display= 'none';
    }
    else{
        
        pinfailure.style.display= 'block';
        pinSuccess.style.display= 'none';
    }
})