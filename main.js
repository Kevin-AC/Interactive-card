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

const errorNumber=document.getElementById('errorNumber');
const montError=document.getElementById('monthError');
const cvError=document.getElementById('cvError');

const tanks=document.getElementById('Thanks');
const form=document.getElementById('form');

let letter = /[a-zA-Z]/;
let flag = false;
nameUser.addEventListener('input',()=>{
    cardName.innerText=`${nameUser.value}`
})

number.addEventListener('input',()=>{
    let inputValue = number.value;
    inputValue= inputValue.replace(/(.{4})/g, "$1 ");
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
    if(monthValue==''){
        month.classList.add('inputError')
        montError.classList.add('errorTxt')
        montError.innerText=`Can't be blank`
    }else{
        month.classList.remove('inputError')
        montError.innerText=``
    }
    
})
year.addEventListener('input',()=>{
    cardYear.innerText=year.value

})
cvc.addEventListener('input',()=>{
    let cvValue=cvc.value
    cardCv.innerText=cvValue
    if(cvValue==''){
        cvc.classList.add('inputError')
        cvError.classList.add('errorTxt')
        cvError.innerText=`Can't be blank`
    }else{
        cvc.classList.remove('inputError')
        cvError.innerText=` `
    }
    
})




function error(){
   
}