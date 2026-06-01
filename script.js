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

if (document.getElementById("contenedor-listado")) {
        const alimentos = [
            { nombre: "Manzana", categoria: "fruta" },
            { nombre: "Banana", categoria: "fruta" },
            { nombre: "Frutilla", categoria: "fruta" },
            { nombre: "Medialuna", categoria: "panaderia" },
            { nombre: "Vigilante", categoria: "panaderia" },
            { nombre: "Churro", categoria: "panaderia" },
            { nombre: "Asado", categoria: "carne" },
            { nombre: "Sandia", categoria: "fruta" },
            { nombre: "Flan", categoria: "postre" },
        ];

        const contenedorListado = document.getElementById("contenedor-listado");
        const btnTodos = document.getElementById("btn-todos");
        const btnFrutas = document.getElementById("btn-frutas");

        const listaRender = (arregloFiltrado) => {
            contenedorListado.innerHTML = "";
            arregloFiltrado.forEach(item => {
                const div = document.createElement("div");
                div.className = "tarjeta";
                div.textContent = item.nombre;
                contenedorListado.appendChild(div);
            });
        };

        listaRender(alimentos);

        btnTodos.addEventListener("click", () => {
            listaRender(alimentos);
        });

        btnFrutas.addEventListener("click", () => {
            const frutas = alimentos.filter(alimento => alimento.categoria === "fruta");
            listaRender(frutas);
        });
    }    
});