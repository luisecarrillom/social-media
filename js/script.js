// Load images into the carousel
function loadImages(prefix, count, containerId) {
  const container = document.getElementById(containerId);
  for (let i = 1; i <= count; i++) {
    const img = document.createElement('img');
    img.src = `assets/${prefix}/Luis_${prefix}_${i}.png`;
    img.alt = `${prefix} ${i}`;
    img.addEventListener('click', () => openModal(img.src, img.alt));
    container.appendChild(img);
  }
}

// Open modal with clicked image
function openModal(src, alt) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = src;
  modalImg.alt = alt;
}

// Close modal
document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("image-modal").style.display = "none";
});

// Load content and design images
loadImages("content", 11, "carousel-content");
loadImages("design", 8, "carousel-design");
