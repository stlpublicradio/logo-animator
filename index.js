/* eslint-disable no-multi-spaces */
import { embedLogo, setGradient } from './scripts'

// Set Defaults
embedLogo('.logo-container', 'pulse') // default animation
setGradient(['#237bbd'])              // default color

// Add Event Listeners to Controls

// Logo Forms (Should logo be Black or White)
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

// Bar Color
const colorButtons = document.querySelectorAll('#color-controls button')

const colors = [
  { name: 'true-blue',        hex: ['#237bbd'] },
  { name: 'transparent-blue', hex: ['#234093'] },
  { name: 'united-purple',    hex: ['#592059'] },
  { name: 'rigorous-red',     hex: ['#d62021'] },
  { name: 'curious-coral',    hex: ['#f26a5b'] },
  { name: 'unbiased-black',   hex: ['#000000'] },
  { name: '85-black',         hex: ['#231f20'] },
  { name: '60-black',         hex: ['#808285'] },
  { name: '35-black',         hex: ['#b1b3b6'] },
  { name: '10-black',         hex: ['#e6e7e8'] },
  { name: 'white',            hex: ['#ffffff'] },
  { name: 'magenta',          hex: ['#9a104f'] },
  { name: 'berry-pink',       hex: ['#e03669'] },
  { name: 'cute-pink',        hex: ['#fbd4da'] },
  { name: 'popsicle-blue',    hex: ['#00abc3'] },
  { name: 'sky-blue',         hex: ['#90cef1'] },
  { name: 'powder-blue',      hex: ['#d4effc'] },
  { name: 'orange',           hex: ['#f26522'] },
  { name: 'yellow-orange',    hex: ['#faa21b'] },
  { name: 'yellow',           hex: ['#edd232'] },
  { name: 'forest-green',     hex: ['#006b71'] },
  { name: 'green',            hex: ['#639d48'] },
  { name: 'glade-green',      hex: ['#b3ca2d'] },
  { name: 'royal-blue',       hex: ['#24206e'] },
  { name: 'deep-blue',        hex: ['#594f91'] },
  { name: 'pale-blue',        hex: ['#d4dcf0'] },
]

for (const color of colors) {
  const button = document.querySelector(`#color-${color.name}`)
  button.addEventListener('click', () => {
    setGradient(color.hex)

    colorButtons.forEach(button => {
      button.classList.remove('active')
    })
    button.classList.add('active')
  })
}
