const containers = document.querySelectorAll('.ball-container')
const balls = document.querySelectorAll('.ball')
const stash = document.querySelector('.box-stash')

let selectedBall = ''

balls.forEach(ball => {
    ball.addEventListener('click',() => {
        selectedBall =ball
    })
})

containers.forEach(container => {
    container.addEventListener('click', () =>{
        container.appendChild(selectedBall)
        console.log(container.lastChild)
    })
})
stash.addEventListener('click',() => {
    stash.appendChild(selectedBall)
})

const start = document.querySelector('.start-title')
const container = document.querySelector('.containers')

document.addEventListener('click', () => {
    start.style.display = 'none'
    container.style.opacity = '1'
    stash.style.opacity ='1'
})

const restart = document.querySelector('#reset')
restart.addEventListener('click',() => {
    location.reload()
})