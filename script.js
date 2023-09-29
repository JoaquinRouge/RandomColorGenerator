const Boton = document.getElementById('boton')
const Color = document.getElementById('color')
const ColorName = document.getElementById('color-name')

Boton.addEventListener('click', AddColor)

function AddColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    Color.style.backgroundColor = `rgb(${r},${g},${b})`
    ColorName.innerHTML = 'El color es = rgb(' + r + ',' + g + ',' + b + ')'
}

