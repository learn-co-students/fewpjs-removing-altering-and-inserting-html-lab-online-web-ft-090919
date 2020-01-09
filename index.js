let newHeader = document.createElement('header')

document.body.appendChild(newHeader)

// let h1 = document.createElement('h1')

for (let i = 0; i < 3; i++) {
  let h1 = document.createElement('h1')
  h1.innerHTML = "Sarah is the champion".toString()
  newHeader.appendChild(h1)
  
}