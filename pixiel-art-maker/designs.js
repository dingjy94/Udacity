// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(evt) {
  // Your code goes here!
  evt.preventDefault();
  document.getElementById('pixelCanvas').innerHTML = '';
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;
  for (let i = 0; i < height; i++) {
     const row = document.createElement('tr');
     for (let j = 0; j < width; j++) {
     	const column = document.createElement('td');
     	row.appendChild(column);
     }
     document.getElementById('pixelCanvas').appendChild(row);
  }
}

function setColor(evt) {
	const color = document.getElementById("colorPicker").value;
	evt.target.style.backgroundColor = color;
}

const form = document.getElementById('sizePicker');
form.addEventListener("submit", makeGrid);
const table = document.getElementById('pixelCanvas');
table.addEventListener("click", setColor);