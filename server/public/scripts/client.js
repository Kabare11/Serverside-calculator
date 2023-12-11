const { post } = require("../../server");

console.log('client.js is sourced!');

let operation;

function addBtn(event) {
    event.preventDefault()
    console.log('inside add btn', event);
    operation = document.getElementById('add').value
    console.log('this is opertaion', operation);
}


function subBtn(event) {
    event.preventDefault()
    console.log('inside sub btn', event);
    operation = document.getElementById('sub').value
    console.log('this is opertaion', operation);
}

function multipBtn(event) {
    event.preventDefault()
    console.log('inside multip btn');
    operation = document.getElementById('multi').value
    console.log('this is opertaion', operation);
}

function divideBtn(event) {
    event.preventDefault()
    console.log('inside divide btn');
    operation = document.getElementById('divide').value
    console.log('this is opertaion', operation);
}

function equalBtn(event) {
    event.preventDefault()
    console.log('Hello');
    const numb1 = document.getElementById('firstNumbImput').value
    const numb2 = document.getElementById('secondNumImput').value
    console.log('inside equal btn', numb1, operation, numb2);

    let datToSend = {
        number1: numb1,
        number2: numb2,
        operator: operation
    }
    console.log('This is data being sent', datToSend);

    axios({
        method: 'POST',
        url: '/calculations',
        data: datToSend

    })
        .then(function (response) {
            console.log("SUCCESS!!!", response.data);

        })
        .catch(function (error) {

            alert('POST failed. Try again later.');
        });
}

function resetBtn(event) {
    event.preventDefault()
    console.log('inside reset btn');
}

