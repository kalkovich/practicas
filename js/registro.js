document.getElementById('registerForm').addEventListener('submit', function(event) {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Expresión regular para validar solo letras (incluyendo Ñ/ñ y tildes)
    let nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    // Expresión regular para validar la contraseña
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    // Patrón para el correo institucional
    let emailPattern = /^[a-zA-Z0-9._%+-]+@unibarranquilla\.edu\.co$/;

    let errors = [];

    // Validación del nombre
    if (!nameRegex.test(fullname)) {
        errors.push('El nombre solo debe contener letras y espacios.');
    }

    // Validación del correo electrónico
    if (!emailPattern.test(email)) {
        errors.push('El correo debe ser un correo institucional de Unibarranquilla.');
    }

    // Validación de la contraseña
    if (!passwordRegex.test(password)) {
        errors.push('La contraseña no cumple con los requisitos. Debe tener al menos 8 caracteres, 1 símbolo, 1 mayúscula, 1 minúscula y 1 número, porfavor digite bien la contraseña.');
    }

    // Si hay errores, mostrar alertas y evitar envío del formulario
    if (errors.length > 0) {
        alert(errors.join('\n'));
        event.preventDefault(); // Evitar que se envíe el formulario
    }
});
