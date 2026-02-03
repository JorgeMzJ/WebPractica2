//Definir la URL de la API y el contenedor donde se mostrarán los usuarios
const url = `https://jsonplaceholder.typicode.com/users`;
const contenedor = document.getElementById('lista-usuarios');

//Función para obtener los usuarios desde la API
function obtenerUsuarios() {
    return fetch(url)
        .then(response => response.json())
        .then(users => users);
}

//Llamar a la función y mostrar los usuarios en el contenedor
obtenerUsuarios().then(users => {
    
    //Limpiar el contenedor antes de agregar nuevos usuarios
    contenedor.innerHTML = ''; 

    //Traducir y mostrar la información de cada usuario
    users.forEach(user => {
        const { 
            name: nombre = "N/A", 
            email: correo = "N/A", 
            address: { city: ciudad = "N/A" } = {} 
        } = user;
        
        //Agregar la información al contenedor
        contenedor.innerHTML += `<li><p>Nombre: ${nombre}</p> <p>Correo: ${correo}</p> <p>Ciudad: ${ciudad}</p></li>`;
    });
});