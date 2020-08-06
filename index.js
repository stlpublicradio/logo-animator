import { embedLogo, setGradient } from './scripts'

// Let's begin
embedLogo('.logo-container', 'pulse')
setGradient(['red', 'orange', 'yellow'])

// Add Event Listeners to Controls

// Logo Forms
const buttonFormBlack = document.querySelector('#form-black')
const buttonFormWhite = document.querySelector('#form-white')
const preview = document.querySelector('.logo-preview')

buttonFormBlack.addEventListener('click', () => {
  preview.classList.remove('inverse')
  buttonFormWhite.classList.remove('active')
  buttonFormBlack.classList.add('active')
})

buttonFormWhite.addEventListener('click', () => {
  preview.classList.add('inverse')
  buttonFormBlack.classList.remove('active')
  buttonFormWhite.classList.add('active')
})
