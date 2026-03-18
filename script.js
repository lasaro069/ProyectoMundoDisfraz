document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe de la forma tradicional (recargando la página)
    event.preventDefault();

    // Aquí podrías procesar los datos (enviarlos a un servidor, por ejemplo)
    
    // Mostramos la ventana emergente
    alert("Mensjae Enviado");

    // Limpiamos el formulario
    this.reset();
});

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Si bajamos, ocultamos; si subimos, mostramos
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }
  lastScroll = currentScroll;
});
