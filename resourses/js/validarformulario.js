document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript

        let nombre = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let categoria = document.getElementById('categoria').value;
        let terminos = document.getElementById('news').checked;
        let message = document.getElementById("message").value;

        // Validación de los campos
        if (nombre.trim() === '') {
            mensajeError.innerText = 'El campo nombre no puede estar vacío.';
            return;
        }

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (categoria === '') {
            mensajeError.innerText = 'Debes seleccionar una opcion.';
            return;
        }

        if (!terminos) {
            mensajeError.innerText = 'Debes aceptar el envio de boletines.';
            return;
        }
        if (message.trim() === '') {
            mensajeError.innerText = 'El campo mensaje no puede estar vacío.';
            return;
        }

        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
        mensajeError.innerText = '';
        // alert('Formulario enviado con éxito!');
        formulario.submit(); // Descomentar esta línea para permitir el envío del formulario
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});