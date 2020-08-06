// className of SVG cannot be redefined, so clear items individually
const clearClassList = element => {
  const classes = [ ...element.classList]

  for (const item of classes) {
    element.classList.remove(item)
  }
}

const setAnimation = animation => {
  const logo = document.querySelector('svg.logo')
  clearClassList(logo)

  logo.classList.add('logo')
  if (animation) logo.classList.add(animation)
}

export default setAnimation
