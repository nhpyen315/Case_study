const numbers = document.getElementsByClassName('btn');
const result = document.getElementById("result-display");


for (let number of numbers) {
    number.addEventListener('click', function() 
    {
        result.innerHTML += number.value
    });
}

function equal() {
    var input = result.innerHTML
    var ketqua = eval(input)
    result.innerHTML = ketqua
}

function allClear() {
    result.innerHTML = ""
}

function clearElement() {
    var input = result.innerHTML
    let output = input.substring(0, input.length-1);
    result.innerHTML = output
}