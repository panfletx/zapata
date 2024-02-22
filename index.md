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
.mosaic {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
    padding: 0px;
}

.photo {
    position: relative;
    width: 100%;
    height: 100%;
}

.photo img {
    width: 100%;
    height: 100%;
}

.horizontal {
    grid-column: span 6;
    grid-row: span 4;
    object-fit: cover;
    object-position: 100% 0;
}

/* Bootstrap responsive classes */
@media (min-width: 576px) {
    .mosaic {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media (min-width: 768px) {
    .mosaic {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 992px) {
    .mosaic {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
}

@media (min-width: 1200px) {
    .mosaic {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
}

</style>


<body>
<div>
<h1>Introducción</h1>
<div>
<p>Este repositorio digital presentará una ventana al mundo personal y literario de Luis Zapata (1951-2020), reconocido nacional e internacionalmente como uno de los escritores de literatura gay mexicana más importantes. El proyecto divulgará un catálogo de su biblioteca junto a más de 500 documentos digitalizados de su archivo, los cuales incluyen correspondencia personal y profesional desde los 60s hasta el 2020, algunos textos inéditos y publicaciones en revistas culturales. Los materiales publicados contribuyen a ampliar el conocimiento de la vida personal e interpersonal del escritor, así como de sus afinidades culturales y literarias. El proyecto busca ser una herramienta de apoyo a la investigación biográfica, bibliográfica y literaria de Zapata, en particular, y de la literatura LGBT mexicana, en general.</p>
<p>La digitalización fue posible gracias al apoyo financiero de una beca FLAGS del programa de estudios LGBT de Yale. Estuvo a cargo de Alan Mendoza Sosa, doctorando con interés en literatura LGBT hispanoamericana, y fue supervisado por el profesor Alexander Gil Fuentes, investigador de humanidades digitales en el Departamento de español y portugués en Yale y director asociado del Foro Creativo, iniciativa que conecta la creación literaria con el trabajo de investigación.</p>
<p>Se proyecta lanzar el archivo y catálogo el 27 de abril del 2024, fecha que marcaría el cumpleaños número 73 de Luis Zapata.</p>
</div>
</div>
</body>

<script>
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
  for (let i = 0; i < 8; i++) {
    const image = createImage(images[i]);
    mosaic.appendChild(image);
  }
}

initGrid();
</script>
