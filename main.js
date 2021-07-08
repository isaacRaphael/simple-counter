let counter = document.querySelector('.counter')
let lowerButton = document.querySelector('.lower')
let higherButton = document.querySelector('.higher')



lowerButton.addEventListener('click', (e) => {
    if (Number(counter.innerText) > 0) {
    counter.innerText = Number(counter.innerText) - 1 
 }
}
)

higherButton.addEventListener('click', (e) => {
    if (Number(counter.innerText) < 50){
    counter.innerText = Number(counter.innerText) + 1  
    }
}
)