document.addEventListener('DOMContentLoaded', function() {
    // Animación de fade-in en la sección de inicio
    const inicioSection = document.getElementById('inicio');
    inicioSection.classList.add('fade-in');
  
    // Animación de slide-up en las secciones de proyectos, experiencia y contacto
    const proyectosSection = document.getElementById('proyectos');
    proyectosSection.classList.add('slide-up');
  
    const experienciaSection = document.getElementById('experiencia');
    experienciaSection.classList.add('slide-up');
  
    const contactoSection = document.getElementById('contacto');
    contactoSection.classList.add('slide-up');
  
    // Agregar evento al hacer hover en los proyectos
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
      proyecto.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#ff416
  