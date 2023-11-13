



const btnNumbOps = document.querySelectorAll('[data-btnNumOps]')
// const operatorButtons = document.querySelectorAll(['data-operator'])
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
//const inputDisplay = document.querySelector(['data-input'])
const outputDisplay = document.querySelector('[data-output]')

btnNumbOps.forEach((numbOps)=>{
    numbOps.addEventListener('click', function(){
        outputDisplay.innerText += numbOps.textContent
    })
})

equalButton.addEventListener('click', ()=>{
    let result = eval(outputDisplay.innerText)
    outputDisplay.textContent = result
})

deleteButton.addEventListener('click', delete1)
clearButton.addEventListener('click',clear)




function clear() {
 outputDisplay.textContent = ""
 
}

function delete1() {
outputDisplay.result.slice(0,-1)
}