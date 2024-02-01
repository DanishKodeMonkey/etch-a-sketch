function makeGrid(size = 16) {
  let screen = document.querySelector(".sketch-screen")
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div")
    column.classList.add("column")
    row.classList.add("square")
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div")
      row.classList.add("row")
      row.classList.add("square")
      row.style.border = "2px solid black"
      column.appendChild(row)
    }
    screen.appendChild(column)
  }
}

makeGrid()
