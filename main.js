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

// number.addEventListener('input',()=>{
//     let inputValue
//     number.value= number.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, "$1 ").trim();
//     inputValue=number.value
//     if(inputValue.match(letter)){
//         number.classList.add('inputError')
//         errorNumber.innerText=`Wrong format,numbers only`
//     }else{
//         number.classList.remove('inputError')
//         errorNumber.innerText=` `
//     }
//     cardNumber.innerText=`${inputValue}`
// })


nameUser.addEventListener('input',()=>{
    cardName.innerText=nameUser.value
    if(!nameUser.value==''){
        nameUser.classList.add('borde')
    }
    if(nameUser.value==''){
        vacio(cardName,'Jane Appleseed')
        nameUser.classList.remove('borde')
    }
})

number.addEventListener("input",e=>{
    inputValue=e.target.value
    cardNumber.innerText=number.value
    let regExp=/[A-z]/g;//buscamos letras de la A a la z 
    if(regExp.test(number.value)){
        verError(number,errorNumber,'Wrong format,numbers only')
    }else{
        number.value=inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g,'$1 ').trim();//--/g busca de manera global .trim()borra el ultimo espacio
        //.replace(/\s/g, '')--busca con\s los espacios los cambia por string vacio
        //.replace(/([0-9]{4})/g,'$1 ')--busca numero {4} los agrupa de a 4 '$1 ' da el espacio entre cada grupo
        ocultarError(number,errorNumber,``)     
    }
    if(number.value==''){
        vacio(cardNumber,'0000 0000 0000 0000')
    }
})

month.addEventListener('input',()=>{
    let monthValue
    month.value=month.value.replace(/[^\dA-Z]/g, '')
    monthValue=month.value
    cardMonth.innerText=monthValue
    if(monthValue==''){
        verError(month,montError,"Can't be blank")
        vacio(cardMonth,'00')
    }else{
        ocultarError(month,montError,``)
    }
   
   
})
year.addEventListener('input',()=>{
    let yearValue
    year.value=year.value.replace(/[^\dA-Z]/g, '')
    yearValue=year.value
    cardYear.innerText=yearValue
    if(yearValue==''){
        verError(year)
        vacio(cardYear,'00')
    }else{
        ocultarError(year)
    }

})
cvc.addEventListener('input',()=>{
    let cvValue
    cvc.value=cvc.value.replace(/[^\dA-Z]/g, '')
    cvValue=cvc.value
    cardCv.innerText=cvValue
    if(cvValue==''){
        verError(cvc,cvError,"Can't be blank")
        vacio(cardCv,'000')
    }else{
        ocultarError(cvc,cvError,``)
    }
    
})

btnConf.addEventListener('click',()=>{
    if(month.value==''||year.value==''||cvc.value==''){
        verError(month,montError,"Can't be blank")
        verError(cvc,cvError,"Can't be blank")
        verError(year)
    }else{
        form.classList.add('hide')
        tanks.classList.remove('hide')
    }

})



function verError(inputError,errorP,msgError){
    inputError.classList.add('inputError')
    errorP.classList.add('errorTxt')
    errorP.innerText=msgError
}

function ocultarError(inputError,errorP,msgError){
    inputError.classList.remove('inputError')
    errorP.classList.remove('errorTxt')
    errorP.innerText=msgError
}
function vacio(string,msgString){
    string.innerText=msgString
}