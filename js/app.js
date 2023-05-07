const incomeElement = document.getElementById('income');
const foodElement = document.getElementById('food');
const rendElement = document.getElementById('rent');
const clothesElement = document.getElementById('clothes');

function getElement(elementId, value){
    const totalExpensesElement = document.getElementById(elementId);
    totalExpensesElement.innerText = value;
}

document.getElementById('calculate').addEventListener('click',function(){
const income = parseInt(incomeElement.value);
const food = parseInt(foodElement.value);
const rent = parseInt(rendElement.value);
const clothes = parseInt(clothesElement.value);

const totalExpenses = food + rent + clothes;
const balance = income - totalExpenses;

getElement('total-expenses', totalExpenses)
getElement('balance', balance);

})

const saveElement = document.getElementById('save-value');
document.getElementById('btn-save').addEventListener('click',function(){
    const income = parseInt(incomeElement.value);
    const saveNumberInt = parseInt(saveElement.value);
    const savings = (saveNumberInt / 100 ) * income;
 
    
    const balanceElement = document.getElementById('balance');
    const balanceInt = parseInt(balanceElement.innerText);

    const reamainingBalance = balanceInt - savings;

    getElement('saving-amount', savings)
    getElement('remaining-balance', reamainingBalance);
   
})



