//Get input data 
const dataInput = document.querySelector('.ibsInput');

const changeWeight = document.querySelector('#changeWeight');
let currentFunc = poundTokilogramandGramOunces;

const fields = document.querySelector('.output').children
for (field of fields) {
  field.style.display = 'none';
}

changeWeight.addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'pounds':
      currentFunc = poundTokilogramandGramOunces
      poundTokilogramandGramOunces();
      break;
    case 'gram':
      currentFunc = gramTokilogramandPoundsOunces
      gramTokilogramandPoundsOunces();
      break;
    case 'ounces':
      ouncesTokilogramandPondsGram();
      currentFunc = ouncesTokilogramandPondsGram
      break;
    case 'kilogram':
      kilogramToandPondsGramOunces();
      currentFunc = kilogramToandPondsGramOunces
      break;
  }
})

// Create Function to convert pound  to Kilogram and Gram and Ounces 
function poundTokilogramandGramOunces(){
  const ibs = dataInput.value;
  showDiv()
  // hide the current output field
  document.querySelector('.poundsOutput').style.display = 'none';

  document.querySelector('.gOutput').innerHTML = ibs/0.00220462;
  document.querySelector('.kgOutput').innerHTML = ibs/2.2046;
  document.querySelector('.ozOutput').innerHTML = ibs/16;
}

// set all input display with class output to block
function showDiv() {
  const fields = document.querySelector('.output').children
  for (field of fields) {
    field.style.display = 'block';
  }
}

function gramTokilogramandPoundsOunces(){
  const ibs = dataInput.value;
  showDiv()
  // hide the current output field
  document.querySelector('.gramOutput').style.display = 'none';

  document.querySelector('.kgOutput').innerHTML = 9;
  document.querySelector('.ozOutput').innerHTML = 6;
  document.querySelector('.pOutput').innerHTML = 6;
}

function ouncesTokilogramandPondsGram(){
  const ibs = dataInput.value;
  showDiv()
  // hide the current output field
  document.querySelector('.ouncesOutput').style.display = 'none';
  
  document.querySelector('.gOutput').innerHTML = 1;
  document.querySelector('.kgOutput').innerHTML = 1;
  document.querySelector('.pOutput').innerHTML = 1;

}

function kilogramToandPondsGramOunces(){
  const ibs = dataInput.value;
  showDiv()
  // hide the current output field
  document.querySelector('.kiloGramOutput').style.display = 'none';
  
  document.querySelector('.gOutput').innerHTML = ibs/0.00220462;
  document.querySelector('.pOutput').innerHTML = ibs/2.2046;
  document.querySelector('.ozOutput').innerHTML = ibs/16;

}

// Call The Function 
dataInput.addEventListener('input', function() {
  currentFunc()
});
