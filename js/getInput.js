function inputFunction(value){
    const inputValue = getInputValue(value);
    createInput(inputValue);
}

function inputFunctionClear(value){
    if(value == 'clear'){
        document.getElementById('input-display').value = "";
    }
    else if(value == 'back'){
        let inputValue = document.getElementById('input-display').value;
        arguments = inputValue;
        let partInput = "";
        console.log(arguments.length);
        for (let i = 0; i < arguments.length-1; i++) {
            partInput = partInput + arguments[i];
        }
        document.getElementById('input-display').value = partInput;
    }
}

function getInputValue(value){
    const inputValue = document.getElementById('btn-' + value).innerText;
    return inputValue;
}

function createInput(inputValue){
    let fullInput = document.getElementById('input-display').value;
    for (let i = 0; i < arguments.length; i++) {
        let partInput = arguments[i];
        fullInput = fullInput + partInput;
        document.getElementById('input-display').value = fullInput;
    }
}