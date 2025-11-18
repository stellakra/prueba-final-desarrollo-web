const AetherBoundDB = {
    //tablas
    Jugador: [
        { id_jugador: 1, nombre: 'Elandor', nivel: 5, experiencia: 1200 }
    ],
    Personaje: [
        { id_personaje: 1, nombre: 'Thalor', clase: 'Paladin', nivel: 5, vida: 100, mana: 50, id_jugador: 1 },
        { id_personaje: 2, nombre: 'Kael', clase: 'Monje', nivel: 4, vida: 80, mana: 30, id_jugador: 1 }
    ],
    Habilidad: [
        { id_habilidad: 1, nombre: 'Luz Purificadora', tipo: 'Curacion', poder: 40, coste_mana: 20 },
        { id_habilidad: 2, nombre: 'Golpe de Fe', tipo: 'Físico', poder: 60, coste_mana: 10 }
    ],
    Personaje_Habilidad: [
        { id_personaje: 1, id_habilidad: 1 },
        { id_personaje: 1, id_habilidad: 2 }
    ],

    Objeto: [
        { id_objeto: 1, nombre: 'Pocion de Vida', tipo: 'Consumible', efecto: 'Restaura 50 HP' },
        { id_objeto: 1, nombre: 'Daga Arrojadiza', tipo: 'Arma', efecto: 'Inflinge 30 daño a distancia' }
    ],

    Invenario: [
        { id_inventario: 1, id_personaje: 1 },
        { id_inventario: 2, id_personaje: 2 }
    ],

    Inventario_Objeto: [
        { id_inventario: 1, id_objeto: 1, cantidad: 5 },
        { id_inventario: 1, id_objeto: 2, cantidad: 2 },
        { id_inventario: 2, id_objeto: 1, cantidad: 3 }
    ],

    Enemigo: [
        { id_enemigo: 1, nombre: 'Duende del Bosque', tipo: 'Bestia', vida: 60, ataque: 15 },
        { id_enemigo: 2, nombre: 'Lobo Gigante', tipo: 'Bestia', vida: 90, ataque: 20 }
    ],

    Zona: [
        { id_zona: 1, nombre: 'Bosque de Lunaria', descripcion: 'Zona densa con criaturas mágicas' },
        { id_zona: 2, nombre: 'Ruinas de Sarragan', descripcion: 'Antigua ciudad maldita' },
    ],

    Enemigo_Zona: [
        { id_enemigo: 1, id_zona: 1 },
        { id_enemigo: 2, id_zona: 1 },
        { id_enemigo: 2, id_zona: 2 }
    ],

    Mision: [
        { id_mision: 1, nombre: 'Limpieza del bosque', descripcion: 'Derrota a los duendes del bosque', recompensa_exp: 200 },
        { id_mision: 2, nombre: 'Rescate en las ruinas', descripcion: 'Encuentra al herido', recompensa_exp: 300 }
    ],

    Jugador_Mision: [
        { id_mision: 1, id_mision: 1, estado: 'En progreso...' },
        { id_mision: 1, id_mision: 2, estado: 'Completada' }
    ],

    Comercio: [
        { id_comercio: 1, nombre: 'Tienda de Lunaria', tipo: 'Pociones' },
        { id_comercio: 2, nombre: 'Mercader Nomada', tipo: 'Armas' },
    ],

    Comercio_Objeto: [
        { id_comercio: 1, id_objeto: 1, precio: 50 },
        { id_comercio: 2, id_objeto: 2, precio: 120 }
    ]
};
