/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable no-multi-spaces */
import { setAnimation, setGradient, renderMarkup, download } from './scripts'

// Set Defaults
const features = {
  animation: 'pulse',
  colors: ['#237bbd'],
  form: 'black',
}
window.features = features

setAnimation('pulse')  // default animation
setGradient(['#237bbd']) // default color

// Add Event Listeners to Controls

// Logo Forms (Should logo be Black or White?)
const buttonFormBlack = document.querySelector('#form-black')
const buttonFormWhite = document.querySelector('#form-white')
const preview = document.querySelector('.logo-preview')

buttonFormBlack.addEventListener('click', () => {
  preview.classList.remove('inverse')
  buttonFormWhite.classList.remove('active')
  buttonFormBlack.classList.add('active')

  features.form = 'black'
})

buttonFormWhite.addEventListener('click', () => {
  preview.classList.add('inverse')
  buttonFormBlack.classList.remove('active')
  buttonFormWhite.classList.add('active')

  features.form = 'white'
})

// Animation
const animationButtons = document.querySelectorAll('#animation-controls button')

const animations = [
  { name: 'animation-none', className: ''},
  { name: 'animation-blink', className: 'blink'},
  { name: 'animation-pulse', className: 'pulse'},
  { name: 'animation-stagger', className: 'stagger'},
]

for (const animation of animations) {
  const button = document.querySelector(`#${animation.name}`)
  button.addEventListener('click', () => {
    setAnimation(animation.className)

    animationButtons.forEach(button => {
      button.classList.remove('active')
    })
    button.classList.add('active')

    features.animation = animation.className
  })
}

// Bar Color
const colorButtons = document.querySelectorAll('#color-controls button')

const colors = [
  { name: 'color-true-blue',        hex: ['#237bbd'] },
  { name: 'color-transparent-blue', hex: ['#234093'] },
  { name: 'color-united-purple',    hex: ['#592059'] },
  { name: 'color-rigorous-red',     hex: ['#d62021'] },
  { name: 'color-curious-coral',    hex: ['#f26a5b'] },
  { name: 'color-unbiased-black',   hex: ['#000000'] },
  { name: 'color-85-black',         hex: ['#231f20'] },
  { name: 'color-60-black',         hex: ['#808285'] },
  { name: 'color-35-black',         hex: ['#b1b3b6'] },
  { name: 'color-10-black',         hex: ['#e6e7e8'] },
  { name: 'color-white',            hex: ['#ffffff'] },
  { name: 'color-magenta',          hex: ['#9a104f'] },
  { name: 'color-berry-pink',       hex: ['#e03669'] },
  { name: 'color-cute-pink',        hex: ['#fbd4da'] },
  { name: 'color-popsicle-blue',    hex: ['#00abc3'] },
  { name: 'color-sky-blue',         hex: ['#90cef1'] },
  { name: 'color-powder-blue',      hex: ['#d4effc'] },
  { name: 'color-orange',           hex: ['#f26522'] },
  { name: 'color-yellow-orange',    hex: ['#faa21b'] },
  { name: 'color-yellow',           hex: ['#edd232'] },
  { name: 'color-forest-green',     hex: ['#006b71'] },
  { name: 'color-green',            hex: ['#639d48'] },
  { name: 'color-glade-green',      hex: ['#b3ca2d'] },
  { name: 'color-royal-blue',       hex: ['#24206e'] },
  { name: 'color-deep-blue',        hex: ['#594f91'] },
  { name: 'color-pale-blue',        hex: ['#d4dcf0'] },

  { name: 'gradient-blues',          hex: ['#237bbd', '#234093']                       },
  { name: 'gradient-cools',          hex: ['#237bbd', '#234093', '#592059']            },
  { name: 'gradient-warms',          hex: ['#592059', '#d62021', '#f26a5b']            },
  { name: 'gradient-reds',           hex: ['#d62021', '#f26a5b']                       },

  { name: 'gradient-dark-grey',      hex: ['#000000', '#231f20', '#808285']            },
  { name: 'gradient-mid-grey',       hex: ['#231f20', '#808285', '#b1b3b6', '#e6e7e8'] },
  { name: 'gradient-light-grey',     hex: ['#b1b3b6', '#e6e7e8', '#ffffff']            },

  { name: 'gradient-magentas',       hex: ['#9a104f', '#e03669', '#fbd4da']            },
  { name: 'gradient-cute-blues',     hex: ['#00abc3', '#90cef1', '#d4effc']            },
  { name: 'gradient-oranges',        hex: ['#f26522', '#faa21b', '#edd232']            },
  { name: 'gradient-greens',         hex: ['#006b71', '#639d48', '#b3ca2d']            },
  { name: 'gradient-deep-blues',     hex: ['#24206e', '#594f91', '#d4dcf0']            },

  { name: 'gradient-magentas-min',   hex: ['#9a104f', '#e03669']                       },
  { name: 'gradient-cute-blues-min', hex: ['#00abc3', '#90cef1']                       },
  { name: 'gradient-oranges-min',    hex: ['#f26522', '#faa21b']                       },
  { name: 'gradient-greens-min',     hex: ['#006b71', '#639d48']                       },
  { name: 'gradient-deep-blues-min', hex: ['#24206e', '#594f91']                       },
]

for (const color of colors) {
  const button = document.querySelector(`#${color.name}`)
  button.addEventListener('click', () => {
    setGradient(color.hex)

    colorButtons.forEach(button => {
      button.classList.remove('active')
    })
    button.classList.add('active')

    features.colors = color.hex
  })
}

// Render Markup
const resultArea = document.querySelector('.modal textarea')
const modalHeading = document.querySelector('.modal h1')

function launchModal (title, contents) {
  modalHeading.textContent = title
  resultArea.textContent = contents
  document.body.classList.add('modal-open')
}

const HTMLExport = document.querySelector('#export-html')
const SVGExport = document.querySelector('#export-svg')
const downloadButton = document.querySelector('#download-markup')

HTMLExport.addEventListener('click', () => {
  const contents = renderMarkup({ ...features, mode: 'HTML'})
  launchModal('HTML Markup', contents)
  downloadButton.onclick = () => {
    download('animated-logo.html', contents)
  }
})

SVGExport.addEventListener('click', () => {
  const contents = renderMarkup({ ...features, mode: 'SVG'})
  launchModal('SVG Markup', contents)
  downloadButton.onclick = () => {
    download('animated-logo.svg', contents)
  }
})

// Close Modal
function closeModal () {
  document.body.classList.remove('modal-open')
}

const closeButton = document.querySelector('.modal-close')

closeButton.addEventListener('click', () => {
  closeModal()
})

window.addEventListener('keydown', ({key}) => {
  if (key === 'Escape') closeModal()
})

// Copy Result
const copyButton = document.querySelector('#copy-to-clipboard')

copyButton.addEventListener('click', () => {
  resultArea.select()
  document.execCommand('copy')
  copyButton.focus()

  copyButton.classList.add('copied')
  setTimeout(() => {
    copyButton.classList.remove('copied')
  }, 1000)
})
