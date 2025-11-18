async function cargarDatos() {
      try {
        const res = await fetch('/api/datos');
        const datos = await res.json();

        const contenedor = document.getElementById('cardsContainer');
        datos.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';

          // Reemplaza estos campos según tus columnas en MySQL
          // a que se refiere
          card.innerHTML = `
            <h3>ID: ${item.id}</h3>
            <p><strong>Nombre:</strong> ${item.nombre}</p>
            <p><strong>Valor:</strong> ${item.valor}</p>
          `;

          contenedor.appendChild(card);
        });

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }

    cargarDatos();