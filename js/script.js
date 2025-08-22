// Capitalize first letter of prefix for matching folder names      
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Load images into the carousel     
function loadImages(prefix, count, containerId) {
  const container = document.getElementById(containerId);
  const folderName = prefix; // Use lowercase to match actual folder names     

  for (let i = 1; i <= count; i++) {
    const img = document.createElement('img');
    img.src = `assets/${folderName}/luis_${prefix}_${i}.png`; // Match correct path     
    img.alt = `${prefix} ${i}`;
    img.addEventListener('click', () => openModal(img.src, img.alt));
    container.appendChild(img);
  }
}

// Open modal with clicked image (improved)
function openModal(src, alt) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = src;
  modalImg.alt = alt;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Stop page from scrolling under the modal
}

// Close modal (centralized)
function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
  document.body.style.overflow = ""; // Restore page scroll
}

// Close by clicking the X button
document.getElementById("modal-close").addEventListener("click", closeModal);


// Load content and design images  
loadImages("content", 11, "carousel-content");
loadImages("design", 8, "carousel-design");

// Close by clicking outside the image (backdrop)
document.getElementById("image-modal").addEventListener("click", (e) => {
  if (e.target.id === "image-modal") closeModal();
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
