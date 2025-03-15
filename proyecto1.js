
// Seleccionamos la imagen con la clase 'forma'
const imagen = document.querySelector('.forma');

// Función para aplicar el efecto zoom
imagen.addEventListener('mouseover', () => {
    imagen.classList.add('zoom'); // Agrega la clase 'zoom' cuando el cursor está sobre la imagen
});

// Función para quitar el efecto zoom
imagen.addEventListener('mouseout', () => {
    imagen.classList.remove('zoom'); // Elimina la clase 'zoom' cuando el cursor sale de la imagen
});
