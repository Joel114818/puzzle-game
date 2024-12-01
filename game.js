const puzzleBoard = document.getElementById('puzzleBoard');
const shuffleBtn = document.getElementById('shuffleBtn');

// Create puzzle pieces
const totalPieces = 9;
let puzzlePieces = [];

for (let i = 1; i <= totalPieces; i++) {
    puzzlePieces.push(i);
}

// Function to create puzzle piece elements
function createPuzzlePiece(number) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.textContent = number;
    piece.setAttribute('data-id', number);
    piece.addEventListener('click', handlePieceClick);
    return piece;
}

// Function to render the puzzle board
function renderPuzzleBoard() {
    puzzleBoard.innerHTML = '';
    puzzlePieces.forEach(piece => {
        const puzzlePiece = createPuzzlePiece(piece);
        puzzleBoard.appendChild(puzzlePiece);
    });
}

// Shuffle the puzzle pieces
function shufflePieces() {
    for (let i = puzzlePieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [puzzlePieces[i], puzzlePieces[j]] = [puzzlePieces[j], puzzlePieces[i]];
    }
    renderPuzzleBoard();
}

// Handle piece click
function handlePieceClick(event) {
    const clickedPiece = event.target;
    const clickedPieceId = clickedPiece.getAttribute('data-id');

    // Example interaction: Swap the clicked piece with another piece (just as a placeholder interaction)
    alert(`Piece ${clickedPieceId} clicked!`);
}

// Add event listener to shuffle button
shuffleBtn.addEventListener('click', shufflePieces);

// Initial render
renderPuzzleBoard();
