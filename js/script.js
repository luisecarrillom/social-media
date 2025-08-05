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