//step-1:add event listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2:get the deposite amount from the deposite input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString)
    //step-3:get the current deposite total
    //as it is text area type so we use innerText to get the text
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    const CurentDepositTotal= previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=CurentDepositTotal;

    //balance section

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    const currentBalanceTotal = previousBalanceTotal + CurentDepositTotal;
    balanceTotalElement.innerText=currentBalanceTotal;

    //to clear the deposit field
    depositField.value='';
})

// for withdraw section

document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText=currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;

    
    withdrawField.value='';


    

})