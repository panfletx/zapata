---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
mosaic: true
---

<style>
  body {
    margin: 0;
  }

  .mosaic {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; /* Three columns */
    grid-template-rows: 1fr 1fr; /* Two rows */
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
    grid-column: span 2; /* Span three columns for the horizontal rectangle */
    grid-row: span 2; 
  }
</style>

<div>

<h1>Introducción</h1>
<div>
<p>Este repositorio digital presentará una ventana al mundo personal y literario de Luis Zapata (1951-2020), reconocido nacional e internacionalmente como uno de los escritores de literatura gay mexicana más importantes. El proyecto divulgará un catálogo de su biblioteca junto a más de 500 documentos digitalizados de su archivo, los cuales incluyen correspondencia personal y profesional desde los 60s hasta el 2020, algunos textos inéditos y publicaciones en revistas culturales. Los materiales publicados contribuyen a ampliar el conocimiento de la vida personal e interpersonal del escritor, así como de sus afinidades culturales y literarias. El proyecto busca ser una herramienta de apoyo a la investigación biográfica, bibliográfica y literaria de Zapata, en particular, y de la literatura LGBT mexicana, en general.</p>
<p>La digitalización fue posible gracias al apoyo financiero de una beca FLAGS del programa de estudios LGBT de Yale. Estuvo a cargo de Alan Mendoza Sosa, doctorando con interés en literatura LGBT hispanoamericana, y fue supervisado por el profesor Alexander Gil Fuentes, investigador de humanidades digitales en el Departamento de español y portugués en Yale y director asociado del Foro Creativo, iniciativa que conecta la creación literaria con el trabajo de investigación.</p>
<p>Se proyecta lanzar el archivo y catálogo el 27 de abril del 2024, fecha que marcaría el cumpleaños número 73 de Luis Zapata.</p>
</div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const mosaic = document.getElementById('mosaic');
    const images = [
      {% for image in site.data.images %}
        "{{ image.url | relative_url }}",
      {% endfor %}
    ];

    let currentIndex = 5; // Start with the fourth image

    // Preload and show all images immediately
    for (let i = 1; i < 5; i++) {
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
      if (mosaic.children.length > 4) {
        mosaic.removeChild(mosaic.children[1]); // Remove the second image onwards
      }
    }

    // Change the image every 5 seconds (adjust the time interval as needed)
    setInterval(showNextImage,3000);
  });
</script>
