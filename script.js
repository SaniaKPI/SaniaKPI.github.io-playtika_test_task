let buttonCalculate = document.getElementById("calculate");
let buttonAddToArray = document.getElementById("addToArray");
let buttonRemoveLast = document.getElementById("removeLast");
let buttonClearArray = document.getElementById("clearArray");
let arrayOnPage = document.getElementById("array");

buttonCalculate.addEventListener("click",createLargestNumber);
buttonAddToArray.addEventListener("click",addToArray);
buttonRemoveLast.addEventListener("click",removeLastElemOfArray);
buttonClearArray.addEventListener("click",clearArray);

let array = [];

 function createLargestNumber() {						//function createLargestNumber()
    if (!array.length){
        alert("Array is empty!");
        return;
    }
    let sortedArray = bubbleSort(array);

    alert("rezult is " + Number(sortedArray.join('')));
}

function addToArray() {
    let num = prompt("input number more or equal to zero");

    if(!/^\d+$/.test(num)) return;

    array.push(Number(num));
    arrayOnPage.innerHTML = array;
}
function removeLastElemOfArray() {
    array.pop();
    arrayOnPage.innerHTML = array;
}
function clearArray() {
    array = [];
    arrayOnPage.innerHTML = array;
}
function bubbleSort(Array) {

    for (let i = 0; i < Array.length-1; i++) {
    	for (let j = 0; j < Array.length-1-i; j++) {
    		if (firstNumberToFront(Array[j+1],Array[j])) {
    			let temp = Array[j+1]; Array[j+1] = Array[j]; Array[j] = temp;
    		}
    	}
    }
    return Array;
}
function firstNumberToFront(num1, num2) {
	let firstVariant = num1.toString() + num2.toString();
	let secondVariant = num2.toString() + num1.toString();

    return Number(firstVariant) >= Number(secondVariant);
}