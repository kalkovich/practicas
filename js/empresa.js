// Inicializar el selector de fecha y hora
flatpickr("#fechaHora", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true
});

// Manejar el envío del formulario para programar entrevista
document.getElementById("scheduleInterviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const direccion = document.getElementById("direccion").value;
    const fechaHora = document.getElementById("fechaHora").value;
    alert(`Entrevista programada en: ${direccion}, el día ${fechaHora}`);
    // Cerrar el modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('scheduleInterviewModal'));
    modal.hide();
});

// Manejar el envío del formulario para crear nueva oferta
document.getElementById("createOfferForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const titulo = document.getElementById("tituloPractica").value;
    const duracion = document.getElementById("duracion").value;
    const ubicacion = document.getElementById("ubicacion").value;
    const descripcion = document.getElementById("descripcion").value;
    alert(`Nueva oferta creada:\nTítulo: ${titulo}\nDuración: ${duracion}\nUbicación: ${ubicacion}\nDescripción: ${descripcion}`);
    // Cerrar el modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('createOfferModal'));
    modal.hide();
});
