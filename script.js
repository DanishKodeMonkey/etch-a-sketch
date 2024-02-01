let screen = document.querySelector(".sketch-screen")

function makeGrid(size = 16) {
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div")
    column.classList.add("column")
    column.classList.add("square")
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div")
      row.classList.add("row")
      row.classList.add("square")
      row.style.border = "1px solid rgba(0,0,0,0.100)"
      column.appendChild(row)
    }
    screen.appendChild(column)
  }
  addOnHover()
}
function addOnHover() {
  const squares = screen.querySelectorAll("div.square")
  squares.forEach((div) => {
    div.addEventListener("mouseover", changeColor)
  })
}
function changeColor(e) {
  e.target.style.backgroundColor = "black"
}
makeGrid(100)
