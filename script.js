const container = document.getElementById('slide')
const label = document.getElementById('slide-index')
const image = document.getElementById('slide-image')
const buttonPrevious = document.getElementById('slide-button-previous')
const buttonNext = document.getElementById('slide-button-next')

let images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg"
]
let index = 0
let limit = images.length - 1

updateIndexLabel()

buttonNext.addEventListener('click', () => {
    nextSlide()
    updateIndexLabel()
})

buttonPrevious.addEventListener('click', () => {
    previousSlide()
    updateIndexLabel()
})

function nextSlide() {
    if (index >= limit) {
        index = 0
    } else {
        index++
    }

    image.src = images[index]
    console.log(index)
}

function previousSlide() {
    if (index <= 0) {
        index = images.length - 1
    } else {
        index--
    }

    image.src = images[index]
    console.log(index)
}

function updateIndexLabel() {
    let indexText = index + 1
    label.innerText = indexText
}