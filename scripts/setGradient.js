const generateColorStops = colors => {
  const offsetIncrement = Math.round((100 / colors.length - 1) || 0)
  return colors
    .map((color, index) => (
      `<stop offset="${index * offsetIncrement}%" stop-color="${color}" />`
    ))
    .join('\n')
}

const setGradient = colors => {
  const gradient = document.querySelector('#gradient-fill')
  gradient.innerHTML = generateColorStops(colors)
}

export default setGradient
