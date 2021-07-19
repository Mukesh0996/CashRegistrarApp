// accessing buttons from DOM
const nextBtn = document.getElementsByClassName('nextBtn')[0];
const submitBtn = document.getElementsByClassName('submitBtn')[0];

// accessing the cash received and bill amount input html tag
const cashReceived = document.getElementsByClassName('cash_received')[0];
const billAmount = document.getElementsByClassName('bill_amount')[0];

//accessing messages div to print messages in the screen
const messages = document.getElementsByClassName('messages')[0];

const cashReceivedDiv = document.getElementsByClassName('cashReceived')[0];
const returnNote = document.getElementsByClassName('return_note')[0];
const availNote = document.getElementsByClassName('avail_note')[0];
// accessing result div to print the number of notes
const resultDiv = document.getElementsByClassName('re')[0];

const availDenominations = [2000, 1000, 500, 200, 100, 50, 10, 1];

availDenominations.forEach(note => {
    let noteDiv = document.createElement('div');
    noteDiv.innerText = note;
    availNote.appendChild(noteDiv);
});

nextBtn.addEventListener('click',(event) => {

    if(Number(billAmount.value) === 0) {
        resultDiv.style.display = "none";
        messages.style = "display: block;"
        messages.innerText = "Enter a bill Amount to proceed."
    } else {
        nextBtn.style = "display : none";
        cashReceivedDiv.style = "display: block"
    }

});

submitBtn.addEventListener('click', () => {
    let received_cash = Number(cashReceived.value), bill_amount = Number(billAmount.value)
    if(received_cash < bill_amount) {
        resultDiv.style.display = "none";
        messages.style = "display: block;"
        messages.innerText = "Enter a valid Bill Amount and Cash given to proceed."

    } else if(received_cash === bill_amount) {
        resultDiv.style.display = "none";
        messages.style = "display: block;";
        messages.innerText = "No balance should be returned";

    } else if(received_cash > bill_amount) {
        messages.style.display = "none"


        resultDiv.style ="display: block";
        calculateBalance(received_cash, bill_amount);
    }
});

const calculateBalance = (received_cash, bill_amount) => {
    let balance = received_cash - bill_amount;
   
    for( let i = 0; i< availDenominations.length; i++ ) {
     if(balance === 0) {
         return;
     }
     let note = availDenominations[i];
     let noOfNotes = Math.floor(balance/note);
     balance = balance - (note * noOfNotes);
     console.log(returnNote.children, noOfNotes);
     returnNote.children[i+1].innerText =  noOfNotes;
    }
}

