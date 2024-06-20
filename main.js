var number = Math.floor(Math.random() * 10 + 1)
var getNumber = document.getElementById('number')
var getBtn = document.getElementById('play')
var ul = document.getElementById('id')
var span = document.querySelector('#pts span')

getBtn.addEventListener('click', function(){

    if(getNumber.value == number){
        let li = document.createElement('li')
        li.textContent = "Parabéns você acertou!"
        ul.appendChild(li)
        getBtn.disabled = true;

    }
    
    if(getNumber.value > number){
        let li = document.createElement('li')
        li.textContent = "Numero menor"
        ul.appendChild(li)
        ecrement()

    }
    
    if(getNumber.value < number){
        let li = document.createElement('li')
        li.textContent = "Numero maior"
        ul.appendChild(li)
        decrement()
    }
            
    })

function decrement(){

    let pts = parseInt(span.textContent)
    pts = pts - 2
    span.textContent = pts

    if(pts == 0){
        getBtn.disabled = true
        let li = document.createElement('li')
        li.textContent = "Você perdeu!"
        ul.appendChild(li)

    }}
