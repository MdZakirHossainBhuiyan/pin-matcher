document.getElementById('generate-pin').addEventListener('click', function(){
    const generatedPin = pinGenerate();
    if(generatedPin.length == 4){
        document.getElementById('pin-display').value = generatedPin;
    }
    else{
        pinGenerate();
    }
})

function pinGenerate(){
    const generatedPin = (Math.random()*10000+'').split('.')[0];
    return generatedPin;
}