---
layout: page
title: null
permalink: /collage/
---
<style>
  body {
    margin: 0;
  }

  .mosaic {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Three columns */
    grid-template-rows: 1fr 2fr; /* Two rows */
    gap: 10px;
    height: 100%;
    padding: 10px;
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .horizontal {
    grid-column: span 3; /* Span three columns for the horizontal rectangle */
    grid-row: span 2; 
  }
</style>

<div class="mosaic" id="mosaic">
  <!-- Static image-->
  <img class="photo horizontal" src="{{ 'assets/images/coverphoto.jpg' | relative_url }}" alt="Static Image">

  <!-- Images will be dynamically added here -->
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const mosaic = document.getElementById('mosaic');
    const images = [
      {% for image in site.data.images %}
        "{{ image.url | relative_url }}",
      {% endfor %}
    ];

    let currentIndex = 4; // Start with the fourth image

    // Preload and show all images immediately
    for (let i = 1; i < 4; i++) {
      const img = document.createElement('img');
      img.className = 'photo';
      img.src = images[i];
      img.alt = 'Image ' + (i + 1);
      mosaic.appendChild(img);
    }

    function showNextImage() {
      const img = document.createElement('img');
      img.className = 'photo';
      img.src = images[currentIndex];
      img.alt = 'Image ' + (currentIndex + 1);

      mosaic.appendChild(img);

      currentIndex = (currentIndex + 1) % images.length;

      // Remove the oldest image if there are more than 4 (adjust for the grid structure)
      if (mosaic.children.length > 3) {
        mosaic.removeChild(mosaic.children[1]); // Remove the second image onwards
      }
    }

    // Change the image every 5 seconds (adjust the time interval as needed)
    setInterval(showNextImage,3000);
  });
</script>