document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("contenedor-meriendas")) {
        const meriendas = ["Café con leche", "Tostadas con queso", "Yogur con cereales", "Licuado de banana", "Galletitas de avena"];
        const contenedor = document.getElementById("contenedor-meriendas");
        const btnContar = document.getElementById("btn-contar-meriendas");
        const resultadoConteo = document.getElementById("resultado-conteo");

        meriendas.forEach(merienda => {
            const p = document.createElement("p");
            p.textContent = `• ${merienda}`;
            contenedor.appendChild(p);
        });

        btnContar.addEventListener("click", () => {
            resultadoConteo.textContent = `El menú tiene ${meriendas.length} opciones disponibles.`;
        });
}

if (document.querySelectorAll(".mi-tarjeta").length > 0) {
        const tarjetas = document.querySelectorAll(".mi-tarjeta");
        const contadorTexto = document.getElementById("contador-seleccionadas");

        tarjetas.forEach(tarjeta => {
            tarjeta.addEventListener("click", () => {
                tarjeta.classList.toggle("seleccionada");
                const seleccionadas = document.querySelectorAll(".tarjeta.seleccionada").length;
                contadorTexto.textContent = seleccionadas;
            });
        });
    }
});