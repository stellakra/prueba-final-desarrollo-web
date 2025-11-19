const buyNowBtn = document.getElementById('comprar-ahora');

const personajes = [
    {id:1, nombre:"Kael", clase:"Paladín", nivel:5, vida:100, mana:50, estado:"Activo"},
    {id:2, nombre:"Thalen", clase:"Monje", nivel:4, vida:80, mana:30, estado:"Activo"},
    {id:3, nombre:"Liora", clase:"Maga", nivel:3, vida:55, mana:80, estado:"Inactivo"},
    {id:4, nombre:"Aeris", clase:"Investigadora", nivel:5, vida:80, mana:20, estado:"Activo"},
    {id:5, nombre:"Zerkhan", clase:"Explorador", nivel:4, vida:110, mana:45, estado:"Activo"}
];

const objetos = [
    {id:1, nombre:"Gran Poción de Vida", tipo:"Consumible", efecto:"Restaura 100 HP"},
    {id:2, nombre:"Daga Arrojadiza", tipo:"Arma", efecto:"Inflige 30 daño"},
    {id:3, nombre:"Rama Aromática", tipo:"Consumible", efecto:"Restaura 20 MP equipo"},
    {id:4, nombre:"Lentes especiales", tipo:"Equipable", efecto:"Muestra puntos críticos"},
    {id:5, nombre:"Amuleto de suerte", tipo:"Equipable", efecto:"Mejora críticos"}
];

const enemigos = [
    {id:1, nombre:"Duende del Bosque", tipo:"Bestia", vida:60, ataque:15},
    {id:2, nombre:"Lobo Gigante", tipo:"Bestia", vida:90, ataque:20},
    {id:3, nombre:"Murciélago", tipo:"Bestia", vida:20, ataque:20},
    {id:4, nombre:"Rata Gigante", tipo:"Bestia", vida:35, ataque:50},
    {id:5, nombre:"DevilJo", tipo:"Wyvern Bruto", vida:100, ataque:50}
];
// Renderizar tablas
function cargarTabla(idTabla, datos) {
    const tbody = document.querySelector(`#${idTabla} tbody`);
    tbody.innerHTML = "";

    datos.forEach(item => {
        const fila = document.createElement("tr");
        Object.values(item).forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            fila.appendChild(td);
        });
        tbody.appendChild(fila);
    });
}

// Filtro de búsqueda
document.getElementById("buscador").addEventListener("keyup", function () {
    const texto = this.value.toLowerCase();

    const filtrar = lista => lista.filter(item =>
        Object.values(item).some(valor =>
            String(valor).toLowerCase().includes(texto)
        )
    );

    cargarTabla("tablaPersonajes", filtrar(personajes));
    cargarTabla("tablaObjetos", filtrar(objetos));
    cargarTabla("tablaEnemigos", filtrar(enemigos));
});

// Cargar tablas al iniciar
cargarTabla("tablaPersonajes", personajes);
cargarTabla("tablaObjetos", objetos);
cargarTabla("tablaEnemigos", enemigos);

//funcion contactanos
document.addEventListener('DOMContentLoaded', function () {
    const contactoBtn = document.getElementById('contacto');
    if (contactoBtn) {
        contactoBtn.addEventListener('click', function (e) {
            alert('Gracias  por contactarnos — ¡te responderemos pronto!');
        });
    }
});

