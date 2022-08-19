/* 
1. add withdraw button event handler
2.get withdraw amount by using gerInputFieldValueById function
3. get previous witdraw amountby using getTexElwmentValueById function
4. claculate new withdraw total and set the value
4.5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using get getTextElementValueById function
6. calculat new balance total 
7. set balance total using setTextElementValueById
*/



document.getElementById('btn-withdraw').addEventListener('click', function(){
    // setp 2 :
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // step 3 : 
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // step 4 : 
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step 4.5 : 
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    // step 5 :
    const previousBalnaceTotal = getTextElementValueById('balance-total');
    // step 6 : 
    const newBalanceTotal = previousBalnaceTotal - newWithdrawAmount;
    // step 7 : 
    setTextElementValueById('balance-total', newBalanceTotal);
})