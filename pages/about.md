---
layout: page
title: About
permalink: /about/
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }

    .collage {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 100vw;
      height: 100vh;
    }

    .photo {
      position: absolute;
      object-fit: cover;
    }
  </style>
</head>
<body>
  <div class="collage" id="collage"></div>

  <script>
    const collageElement = document.getElementById('collage');
    const photoUrls = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      // Add more image URLs here
    ];

    function getRandomSize() {
      const width = Math.floor(Math.random() * 3) + 1; // Random width between 1 and 3
      const height = Math.floor(Math.random() * 3) + 1; // Random height between 1 and 3
      return { width, height };
    }

    function createPhotoElement(url, size) {
      const photoElement = document.createElement('img');
      photoElement.src = url;
      photoElement.classList.add('photo');
      photoElement.style.width = `${size.width * 100}vw`;
      photoElement.style.height = `${size.height * 100}vh`;
      return photoElement;
    }

    function updateCollage() {
      collageElement.innerHTML = '';

      photoUrls.forEach(url => {
        const size = getRandomSize();
        const photoElement = createPhotoElement(url, size);

        const xPosition = Math.random() * (100 - size.width) + 1;
        const yPosition = Math.random() * (100 - size.height) + 1;

        photoElement.style.left = `${xPosition}vw`;
        photoElement.style.top = `${yPosition}vh`;

        collageElement.appendChild(photoElement);
      });
    }

    function changePhotosRandomly() {
      setInterval(updateCollage, 5000); // Change photos every 5 seconds
    }

    changePhotosRandomly();
  </script>
</body>
</html>
