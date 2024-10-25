
// Task 2: Configure JavaScript for Drawing Context

const canvas = document.getElementById('drawingCanvas'); // setting up variables from html file
const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX, startY;
const colorPicker = document.getElementById('colorPicker');

// Task 3: Implement Shape Drawing Logic 
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath(); // Start a new path to prevent connecting shapes
});


canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const tool = document.querySelector('input[name="tool"]:checked').value;
    ctx.strokeStyle = colorPicker.value; // Add color selection 

    if (tool === 'line') {
        ctx.lineWidth = 2;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    } else if (tool === 'rectangle') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeRect(startX, startY, e.offsetX - startX, e.offsetY - startY);
    } else if (tool === 'circle') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// Task 4: Add Canvas clearing 
document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


