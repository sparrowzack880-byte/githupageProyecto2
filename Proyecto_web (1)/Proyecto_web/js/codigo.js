document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const tableRows = document.querySelectorAll("#table-commands tbody tr");

    if (searchInput) {
        // Crear un elemento dinámico para mostrar el contador de resultados
        const searchSection = searchInput.closest(".search-section") || searchInput.parentElement;
        const counterDiv = document.createElement("p");
        counterDiv.style.marginTop = "0.5rem";
        counterDiv.style.fontSize = "0.9rem";
        counterDiv.style.color = "#666";
        searchSection.appendChild(counterDiv);

        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            tableRows.forEach(row => {
                const textContent = row.textContent.toLowerCase();
                
                if (textContent.includes(searchTerm)) {
                    row.style.display = ""; // Muestra la fila
                    visibleCount++;
                } else {
                    row.style.display = "none"; // Oculta la fila
                }
            });

            // Actualizar el texto del contador en tiempo real
            if (searchTerm === "") {
                counterDiv.textContent = "";
            } else {
                counterDiv.textContent = `Mostrando ${visibleCount} resultado(s) para "${e.target.value}"`;
            }
        });

        // Atajo de teclado: Presionar '/' para enfocar el buscador rápidamente
        document.addEventListener("keydown", (event) => {
            if (event.key === "/" && document.activeElement !== searchInput) {
                event.preventDefault();
                searchInput.focus();
            }
        });
    }
});