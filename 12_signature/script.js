const canvas = document.getElementById("signature-pad");
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
  ctx.beginPath();
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!isDrawing) return;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

// Clear button
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Download as Image
document.getElementById("download-image").addEventListener("click", () => {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "signature.png";
  link.click();
});

// Download as PDF
document.getElementById("download-pdf").addEventListener("click", () => {
  const imgData = canvas.toDataURL("image/png");
  const pdfContent = document.createElement("div");
  const img = document.createElement("img");
  img.src = imgData;
  pdfContent.appendChild(img);

  html2pdf().set({ filename: "signature.pdf" }).from(pdfContent).save();
});
