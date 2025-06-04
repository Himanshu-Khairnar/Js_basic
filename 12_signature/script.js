const canvas = document.getElementById("signature-pad");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let x = 0,
  y = 0;
let penColor = "#000000";
let penSize = 2;

let paths = [];
let redoStack = [];

function startDrawing(e) {
  isDrawing = true;
  [x, y] = [e.offsetX, e.offsetY];
  paths.push([{ x, y, color: penColor, size: penSize }]);
}

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = penColor;
  ctx.lineWidth = penSize;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  x = e.offsetX;
  y = e.offsetY;

  paths[paths.length - 1].push({ x, y, color: penColor, size: penSize });
}

function stopDrawing() {
  isDrawing = false;
}

function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const path of paths) {
    ctx.beginPath();
    ctx.strokeStyle = path[0].color;
    ctx.lineWidth = path[0].size;
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();
  }
}

// Events
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

// Controls
document.getElementById("pen-color").onchange = (e) => {
  penColor = e.target.value;
};

document.getElementById("pen-size").oninput = (e) => {
  penSize = parseInt(e.target.value);
};

document.getElementById("undo").onclick = () => {
  if (paths.length > 0) {
    redoStack.push(paths.pop());
    redrawCanvas();
  }
};

document.getElementById("redo").onclick = () => {
  if (redoStack.length > 0) {
    paths.push(redoStack.pop());
    redrawCanvas();
  }
};

document.getElementById("save").onclick = () => {
  localStorage.setItem("signature", JSON.stringify(paths));
};

document.getElementById("load").onclick = () => {
  const saved = localStorage.getItem("signature");
  if (saved) {
    paths = JSON.parse(saved);
    redrawCanvas();
  }
};

document.getElementById("clear").onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paths = [];
  redoStack = [];
};

document.getElementById("download-image").onclick = () => {
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = canvas.toDataURL();
  link.click();
};

document.getElementById("download-pdf").onclick = () => {
  html2pdf().from(canvas).save("signature.pdf");
};
