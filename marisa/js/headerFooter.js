// Función para cargar el contenido del header
function cargarHeader() {
    // Crea un nuevo objeto XMLHttpRequest, que permite realizar solicitudes HTTP asincrónicas desde JavaScript.
    var xhr = new XMLHttpRequest();

    // Abre una solicitud GET al archivo 'Ambar/header.html' de forma asíncrona.
    xhr.open('GET', 'Ambar/header.html', true); // Corregir la ruta aquí

    // Establece una función de devolución de llamada que se ejecutará cada vez que cambie el estado de la solicitud.
    xhr.onreadystatechange = function() {
        // Verifica si la solicitud se ha completado (readyState == 4) y si el estado de la respuesta es 200 (OK).
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Si la solicitud fue exitosa, coloca el contenido de la respuesta en el elemento con el id 'header-container'.
            document.getElementById('header-container').innerHTML = xhr.responseText;
        }
    };

    // Envía la solicitud al servidor.
    xhr.send();
}

// Función para cargar el contenido del footer
function cargarFooter() {
    // Crea otro objeto XMLHttpRequest para cargar el footer.
    var xhr = new XMLHttpRequest();

    // Abre una solicitud GET al archivo 'footer.html' de forma asíncrona.
    xhr.open('GET', 'footer.html', true);

    // Establece una función de devolución de llamada para manejar el cambio de estado de la solicitud.
    xhr.onreadystatechange = function() {
        // Verifica si la solicitud se ha completado (readyState == 4) y si el estado de la respuesta es 200 (OK).
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Si la solicitud fue exitosa, coloca el contenido de la respuesta en el elemento con el id 'footer-container'.
            document.getElementById('footer-container').innerHTML = xhr.responseText;
        }
    };

    // Envía la solicitud al servidor.
    xhr.send();
}

// Llamar a las funciones para cargar el header y el footer cuando la página se cargue
window.onload = function() {
    // Cuando la página se carga completamente, llama a las funciones para cargar el contenido del header y del footer.
    cargarHeader();
    cargarFooter();
};
