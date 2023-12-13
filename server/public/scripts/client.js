
// Global variable to store the current operator selected by the user through the DOM.
let operator;

/**
 * Retrieves the latest calculation history from the server and updates the page.
 * This function makes a GET request to "/calculations" to fetch the history.
 * On success, it updates the page with the current history and the latest answer.
 */
function getHistory() {
    axios.get("/calculations")
        .then(response => {
            console.log('Current History:', response.data);
            renderHistory(response.data);
            renderLatestAnswer(response.data);
        })
        .catch(error => {
            alert("Error fetching history!");
            console.log(error);
        });
}

// Initial call to getHistory to load the history when the page is first loaded.
getHistory();

/**
 * Handles the submission of the calculator form.
 * This function is triggered when the equals button is clicked.
 * It sends the input numbers and the selected operator to the server via POST.
 */
function handleSubmit(event) {
    event.preventDefault();
    console.log("Handle Submit has been clicked!");
    console.log("Current Operator:", operator);

    // Retrieve input values from the DOM.
    const numOne = document.getElementById("firstInput").value;
    const numTwo = document.getElementById("secondInput").value;
    console.log("Inputs: ", numOne, numTwo);

    // Send POST request with numbers and operator.
    axios.post("/calculations", {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator
    })
        .then(response => {
            // Refresh history and clear inputs after successful submission.
            getHistory();
            handleClear(event);
        })
        .catch(error => {
            alert("Error during submission!");
            console.log(error);
        });
}

/**
 * Handles operator selection.
 * Updates the global 'operator' variable based on user selection.
 */
function handleOperator(event) {
    event.preventDefault();
    operator = event.target.textContent;
    console.log("Operator changed to: ", operator);
}

/**
 * Clears the calculator inputs and resets the operator.
 * Triggered when the 'C' button is pushed.
 */
function handleClear(event) {
    event.preventDefault();
    document.getElementById("firstInput").value = '';
    document.getElementById("secondInput").value = '';
    operator = undefined;
}

/**
 * Renders the latest calculation result on the DOM.
 * It extracts the last item from the history array and displays its result.
 */
function renderLatestAnswer(history) {
    console.log("Rendering Answer...");
    const lastHistory = history[history.length - 1];
    console.log("Last item:", lastHistory);
    document.getElementById("recentResult").innerText = lastHistory.result;
}

/**
 * Appends the entire calculation history to the DOM.
 * Loops through the history array and adds each calculation to the history display.
 */
function renderHistory(history) {
    console.log("Rendering History...");
    let placeToRender = document.getElementById("resultHistory");
    placeToRender.innerHTML = '';
    history.forEach(item => {
        placeToRender.innerHTML += `<li>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}</li>`;
    });
}








































































































































// const { post } = require("../../server");

// console.log('client.js is sourced!');

// let operation;

// function addBtn(event) {
//     event.preventDefault()
//     console.log('inside add btn', event);
//     operation = document.getElementById('add').value
//     console.log('this is opertaion', operation);
// }


// function subBtn(event) {
//     event.preventDefault()
//     console.log('inside sub btn', event);
//     operation = document.getElementById('sub').value
//     console.log('this is opertaion', operation);
// }

// function multipBtn(event) {
//     event.preventDefault()
//     console.log('inside multip btn');
//     operation = document.getElementById('multi').value
//     console.log('this is opertaion', operation);
// }

// function divideBtn(event) {
//     event.preventDefault()
//     console.log('inside divide btn');
//     operation = document.getElementById('divide').value
//     console.log('this is opertaion', operation);
// }

// function equalBtn(event) {
//     event.preventDefault()
//     console.log('Hello');
//     const numb1 = document.getElementById('firstNumbImput').value
//     const numb2 = document.getElementById('secondNumImput').value
//     console.log('inside equal btn', numb1, operation, numb2);

//     let datToSend = {
//         number1: numb1,
//         number2: numb2,
//         operator: operation
//     }
//     console.log('This is data being sent', datToSend);

//     axios({
//         method: 'POST',
//         url: '/calculations',
//         data: datToSend

//     })
//         .then(function (response) {
//             console.log("SUCCESS!!!", response.data);

//         })
//         .catch(function (error) {

//             alert('POST failed. Try again later.');
//         });
// }

// function resetBtn(event) {
//     event.preventDefault()
//     console.log('inside reset btn');
// }

