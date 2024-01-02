let operation;
let firstNumbImput = document.getElementById("firstNumbImput")
let secondNumImput = document.getElementById("secondNumImput")
let resultHistory = document.getElementById("resultHistory")
let recentResult = document.getElementById("recentResult")

function getHistory() {
    axios({
        method: 'GET',
        url: '/calculations',
    }).then(res => printHistory(res.data))
}
getHistory()

function printHistory(data) {
    resultHistory.innerHTML = ""
    data.forEach(item => {
        resultHistory.innerHTML += `<div>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}</div>`;
    });

    const lastHistory = data[data.length - 1];

    recentResult.innerHTML = `<h2>${lastHistory.result}</h2>`
}

function equalBtn(event) {
    event.preventDefault()
    console.log('Hello');
    const numb1 = document.getElementById('firstNumbImput').value
    const numb2 = document.getElementById('secondNumImput').value
    console.log('inside equal btn', numb1, operation, numb2);

    let datToSend = {
        numOne: numb1,
        numTwo: numb2,
        operator: operation
    }
    console.log('This is data being sent', datToSend);
    axios({
        method: "POST",
        url: "/calculations",
        data: datToSend
    }).then(() => {
        getHistory()
        firstNumbImput.value = ""
        secondNumImput.value = ""
    }).catch(err => {
        console.log(err)
    })

}

function resetBtn(event) {
    event.preventDefault()
    firstNumbImput.value = ""
    secondNumImput.value = ""
}

function handleOperation(event) {
    event.preventDefault()
    operation = event.target.value
    console.log(operation)
}