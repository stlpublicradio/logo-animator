// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server

function download (filename, text) {
  const element = document.createElement('a')
  const contents = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`

  element.setAttribute('href', contents)
  element.setAttribute('download', filename)
  element.style.display = 'none'

  document.body.append(element)
  element.click()
  element.remove()
}

export default download
