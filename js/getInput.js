function inputFunction(value){
    const inputValue = getInputValue(value);
    createInput(inputValue);
}

function getInputValue(value){
    const inputValue = document.getElementById('btn-' + value).innerText;
    return inputValue;
}

function createInput(inputValue){
    let fullInput = document.getElementById('input-display').value;
    console.log(typeof(fullInput));
    for (let i = 0; i < arguments.length; i++) {
        let partInput = arguments[i];
        fullInput = fullInput + partInput;
        document.getElementById('input-display').value = fullInput;
    }
}