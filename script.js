const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const selamiInfo = document.getElementById("selamiInfo");
const customImage = document.getElementById("customImage");

// Show info & image when "Yes" is clicked
yesBtn.addEventListener("click", function () {
  selamiInfo.classList.remove("hidden");
  customImage.classList.remove("hidden");
  yesBtn.disabled = true; // "Yes" button becomes inactive
});

// Move "No" button & enlarge "Yes" button on hover
noBtn.addEventListener("mouseover", function () {
  const maxX = window.innerWidth - noBtn.offsetWidth - 50;
  const maxY = window.innerHeight - noBtn.offsetHeight - 50;
  noBtn.style.left = Math.max(0, Math.random() * maxX) + "px";
  noBtn.style.top = Math.max(0, Math.random() * maxY) + "px";
  noBtn.style.position = "absolute";

  // Limit "Yes" button size
  const maxFontSize = 40;
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  if (currentSize < maxFontSize) {
    yesBtn.style.fontSize = (currentSize + 3) + "px";
  }
});

// Copy the Bkash number
function copyNumber() {
  navigator.clipboard.writeText("01790467463");
  alert("Bkash Number Copied! Themks .msa");
}
