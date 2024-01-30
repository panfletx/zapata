---
layout: page
title: Catalogue
permalink: /catalogue/
---

<div id="example-table"></div>

<script>
    // Initialize Tabulator with CSV importer
    var table = new Tabulator("#example-table", {
        height:205,
        pagination:"local",
        paginationSize:6,
        paginationSizeSelector:[3, 6, 8, 10],
        movableColumns:true,
        paginationCounter:"rows",
        autoColumns:true,
    });

    // Fetch CSV data and set it to the table
    fetch('{{ "/assets/datasets/lzapata.csv" | relative_url }}')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data using PapaParse
            var jsonData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;

            // Set data for the table
            table.setData(jsonData);
        })
        .catch(error => console.error('Error fetching data:', error));
</script>