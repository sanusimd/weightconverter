
// document.querySelector('.output').style.visibility = 'hidden';
// document.querySelector('.ibsInput').addEventListener('input',
//  function(e){
//     document.querySelector('.output').style.visibility = 'visible';
//     const ibs = e.target.value;
//     document.querySelector('.gOutput').innerHTML = ibs/0.00220462;
//     document.querySelector('.kgOutput').innerHTML = ibs/2.2046;
//     document.querySelector('.ozOutput').innerHTML = ibs/16;

// });
//Get input data 
const dataInput = document.querySelector('.ibsInput');

// Create Function to convert pound  to Kilogram and Gram and Ounces 
function poundTokilogramandGramOunces(){
    const ibs = dataInput.value;
    document.querySelector('.gOutput').innerHTML = ibs/0.00220462;
    document.querySelector('.kgOutput').innerHTML = ibs/2.2046;
    document.querySelector('.ozOutput').innerHTML = ibs/16;

}


// Call The Function 
dataInput.addEventListener('input',poundTokilogramandGramOunces);

