const cardCv=document.getElementById('CardCv');
const cardNumber=document.getElementById('CardNumber');
const cardName=document.getElementById('CardName');
const cardMonth=document.getElementById('CardMonth');
const cardYear=document.getElementById('CardYear');

const nameUser=document.getElementById('Name');
const number=document.getElementById('Number');

const month=document.getElementById('month');
const year=document.getElementById('year');
const cvc=document.getElementById('cvc');

const btnConf=document.getElementById('btnConfirm');
const btnConti=document.getElementById('btnContinue');

const errorNumber=document.getElementById('errorNumber')
const montError=document.getElementById('monthError')
const cvError=document.getElementById('cvError')
let letter = /[a-zA-Z]/;

nameUser.addEventListener('input',()=>{
    cardName.innerText=`${nameUser.value}`
})

number.addEventListener('input',()=>{
    let inputValue = number.value;
    let newString = inputValue.replace(/(.{4})/g, "$1 ");
    inputValue = newString;
    if(inputValue.match(letter)){
        number.classList.add('inputError')
        errorNumber.innerText=`Wrong format,numbers only`
    }else{
        number.classList.remove('inputError')
        errorNumber.innerText=` `
    }
    cardNumber.innerText=`${inputValue}`
})
month.addEventListener('input',()=>{
    let monthValue=month.value
    cardMonth.innerText=monthValue
    
})
year.addEventListener('input',()=>{
    cardYear.innerText=year.value

})
cvc.addEventListener('input',()=>{
    let cvValue=cvc.value
    cardCv.innerText=cvValue
    
})

function error(){
   
}