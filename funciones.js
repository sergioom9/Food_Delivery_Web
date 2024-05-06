const ciudades = [
    "A Coruña", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Barcelona", "Bilbao",
    "Burgos", "Cáceres", "Cádiz", "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca",
    "Girona", "Granada", "Guadalajara", "Huelva", "Huesca", "Ibiza", "Jaén", "Jerez de la Frontera",
    "La Rioja", "Las Palmas de Gran Canaria", "León", "Lleida", "Logroño", "Lugo", "Madrid", "Málaga",
    "Melilla", "Mérida", "Murcia", "Ourense", "Oviedo", "Palencia", "Palma de Mallorca", "Pamplona",
    "Pontevedra", "Salamanca", "San Sebastián", "Santa Cruz de Tenerife", "Santander", "Segovia",
    "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vitoria-Gasteiz",
    "Zamora", "Zaragoza"
];
function rellenarCiudades(elementId, opciones) {
    const selectElement = document.getElementById(elementId);
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion;
        option.textContent = opcion;
        selectElement.appendChild(option);
    });
}

function clearinput(input) {
        input.placeholder = '';
}

function guardar() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const direccion = document.getElementById('direccion').value;
    const codigopostal = document.getElementById('cp').value;
    const ciudad = document.getElementById('ciudad').value;
    const telefono = document.getElementById('telf').value;

    if (nombre && apellidos && direccion && codigopostal && ciudad && telefono) {
        const nuevaDireccion = { nombre, apellidos, direccion, codigopostal, ciudad, telefono };
        let direcciones = JSON.parse(localStorage.getItem('direcciones')) || [];
        direcciones.push(nuevaDireccion);
        localStorage.setItem('direcciones', JSON.stringify(direcciones));
        alert('Dirección guardada');
        document.getElementById('formulario').reset();
    } else {
        alert('Por favor rellene todo');
    }
}

function navegar() {
    window.location.href = 'direcciones.html';
}
