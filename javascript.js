const handleMouseOver = (event) => {
  const square = event.target;
  if (square.style.backgroundColor === 'black') {
    const rand = () => Math.random() * 255;
    square.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
  } else if (square.style.opacity !== '0') {
    square.style.opacity = String(Number(square.style.opacity) - 0.1);
  }
};

const createGrid = (size) => {
  const div = document.querySelector('.container');

  // Clear previous grid squares, if any
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  const squareSize = 650 / size;

  // Create new grid and append to the div
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('squares');
    gridSquare.id = String(i);
    gridSquare.style.height = `${squareSize}px`;
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.backgroundColor = 'black';
    gridSquare.style.opacity = '1';
    gridSquare.addEventListener('mouseover', handleMouseOver);
    div.appendChild(gridSquare);
  }
};

const resetGrid = (event) => {
  document.querySelectorAll('.squares').forEach(square => {
    square.style.background = 'black';
    square.style.opacity = '1';
  });
};

const getGridSize = (event) => {
  const size = prompt('Enter number of squares per side (1 - 100)');
  if (size >= 1 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a size between 1 and 100.');
    getGridSize();
  }
};

const app = () => {
  createGrid(16);
  document.getElementById('reset').addEventListener('click', resetGrid);
  document.getElementById('new-grid').addEventListener('click', getGridSize);
};

app();
