let screen = document.querySelector(".sketch-screen")
let gridBtn = document.querySelector("#gridBtn")
let size = 16 // Grid field size, default value 16

//Start out by making a default grid
makeGrid(size)

//Function for grid size button
gridBtn.addEventListener("click", () => {
  const userInput = prompt(
    "Enter a value for the size of the grid between 3-100"
  )
  if (userInput > 100 || userInput < 3 || typeof userInput !== "number") {
    alert("You have entered an invalid value, try again.")
    userInput = prompt("Enter a value between 3-100")
  } else {
    size = userInput
    clearGrid()
    makeGrid(size)
  }
})

function clearGrid() {
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild)
  }
}

function makeGrid(size) {
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
  e.target.style.backgroundColor = randomRgb()
}

let randomRgb = () => {
  let r = Math.floor(Math.random() * 256) //red
  let g = Math.floor(Math.random() * 256) //green
  let b = Math.floor(Math.random() * 256) //blue
  return "rgb(" + r + "," + g + "," + b + ")"
}
