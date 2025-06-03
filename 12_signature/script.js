const canvas = document.getElementById("signature-pad");
const ctx = canvas.getContext("2d");

// Function to resize canvas while preserving content
function resizeCanvas() {
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  tempCanvas.getContext("2d").drawImage(canvas, 0, 0);

  const containerWidth = canvas.parentElement.clientWidth;
  canvas.width = containerWidth;
  canvas.height = 200;

  ctx.drawImage(
    tempCanvas,
    0,
    0,
    tempCanvas.width,
    tempCanvas.height,
    0,
    0,
    canvas.width,
    canvas.height
  );
}

// Initial resize
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Drawing logic
let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));
canvas.addEventListener("mousemove", draw);

function draw(event) {
  if (!drawing) return;

  const rect = canvas.getBoundingClientRect();
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";

  ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
}

// Clear button
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});

// Download as image
document.getElementById("download-image").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = canvas.toDataURL();
  link.click();
});

// Download as PDF
document.getElementById("download-pdf").addEventListener("click", () => {
  const opt = {
    margin: 1,
    filename: "signature.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
  };
  html2pdf().from(canvas).set(opt).save();
});
