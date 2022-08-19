function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const textElemetnValue = parseFloat(elementValueString);
    return textElemetnValue;
}
function setTextElementValueById(elementId, newvalue){
    const elementId = getElementValueById();
    textElement.innertext = textElementValue;
}
document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 
    1.get the element by id 
    2.get the value from
    3.convert string value to a number
    */
   const newDepositAmount = getInputFieldValueById('deposit-field');
   /* 
   1. get previous deposit total by id
   2.
   */
  
  const previousDepositTotal = setTextElementValueById('deposit-total');
  console.log(newDepositAmount);

//   calculat e new deposit total 
const newDepositTotal = previousDepositTotal + newDepositAmount;
// set deposit total value 
setTextElementValueById('deposit-total', newDepositTotal);
// get previous balance by using the function 
const previousBalnaceTotal = setTextElementValueById('balance-total');
const newBalanceTotal = previousBalnaceTotal + newDepositAmount;
setTextElementValueById('balance-total', newBalanceTotal);

// kisu bakhi oreche tai abar dekhte hbe

// Module-27

})