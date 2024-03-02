const mosaic = document.getElementById('mosaic');
const images = [
  {% for image in site.data.images %}
    "{{ image.url | relative_url }}",
  {% endfor %}
];

// Function to create an image element
function createImage(src) {
  const image = document.createElement('img');
  image.classList.add('photo');
  image.src = src;
  image.alt = 'Image';
  return image;
}

// Initialize the grid with static images
function initGrid() {
    for (let i = 0; i < 6; i++) {
    const image = createImage(images[i]);
    mosaic.appendChild(image);
  }
}
initGrid();