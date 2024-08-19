function renderShapeDos(page) {
    page.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const shape = document.createElement("div");
        shape.className = "p-0 m-2 col-6 col-sm-4 col-md-2";
        shape.innerHTML = `
            <div class="square">
            <p>Square</p>
            </div>`;

        shape.addEventListener('mouseover', function () {
            this.classList.add("squareGrow")
        });
        shape.addEventListener('mouseout', function () {
            this.classList.remove("squareGrow")
        });
        page.appendChild(shape);
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const pageElement = document.getElementById('shapeDos');
    renderShapeDos(pageElement);
});

