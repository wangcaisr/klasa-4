// 1. Przypisz zdarzenie mouseenter do wszystkich przekazanych elementów
// 2. Po najechaniu na element, odczytaj jego pozycję na stronie
// 3. Stwórz dynamicznie element tooltip
// 4. Wypozycjonuj element tooltip w odpowiednim miejscu i wstaw go na stronę
// 5. Przypisz zdarzenie mouseleave do wszystkich przekazanych elementów
// 6. Po zjechaniu z elementu, usuń tooltip ze strony
// 7. Zamknij kod w module

(function() {
    let activeTooltip = null;

    function createTooltip(text, options) {
        const tooltip = document.createElement("div");

        tooltip.className = "edu-tooltip hidden";
        tooltip.textContent = text;

        document.body.append(tooltip);

        tooltip.style.left = `${options.x + options.w / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${options.y - tooltip.offsetHeight - 10}px`;

        tooltip.classList.remove("hidden");

        activeTooltip = tooltip;
    }

    function showTooltip(e) {
        const pos = e.currentTarget.getBoundingClientRect();

        const options = {
            w: pos.width,
            x: pos.left,
            y: pos.top
        };

        const text = e.currentTarget.getAttribute("title");

        createTooltip(text, options);

        e.currentTarget.removeAttribute("title");
    }

    function hideTooltip(e) {
        if(activeTooltip) {
            e.currentTarget.setAttribute("title", activeTooltip.textContent)
            activeTooltip.remove();
        }
    }

    function init(elems) {
        for(let elem of elems) {
            elem.addEventListener("mouseenter", showTooltip);
            elem.addEventListener("mouseleave", hideTooltip);
        }
    }

    window.makeTooltip = init;
})();

makeTooltip(document.querySelectorAll("[title]"));
