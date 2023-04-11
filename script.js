const socio = document.querySelector("#agregar-socio")
const formulario = document.querySelector("#formulario")
const tarjeta = document.querySelector(".tarjeta-socio")
const usuarios = []
tarjeta.style.display = "none"

const tarjetaClub = () => {
    formulario.style.display = "none"
    for( const usuario of usuarios){
    tarjeta.innerHTML = `
    <div id="nueva-tarjeta">
        <h2>${usuario.nombre} ${usuario.apellido}</h2>

        <p>¡Bienvenid@ a nuestro club!</p>

        <p>Te dejamos un regalito de bienvenida en tu correo</p>

        <i class="fa-sharp fa-solid fa-gift"></i>
    </div>
    `
    tarjeta.style.display = "flex"
}
}

socio.addEventListener("submit",(event) => {
    
    event.preventDefault()
    usuarios.push({
        nombre: socio.nombre.value,
        apellido: socio.apellido.value,
        email: socio.email.value,
        contraseña: socio.contrasena.value

    })

    tarjetaClub()
})



function menuDesplegable(){
    const nav = document.querySelector("#nav")
    const abrir = document.querySelector("#abrir")
    const cerrar = document.querySelector("#cerrar")

    abrir.addEventListener("click", () => {
        nav.classList.add("visible")
    })

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible")
})
}

function catalogo(){
    const contenedorHTML = document.getElementById("catalogo")
    fetch("./database.json")
    .then(response => response.json())
    .then(data => {
        for(producto of data){
            contenedorHTML.innerHTML += `
            <div class="elemento">
                <img src=${producto.url}/>
                <div class="precio">
                    <h5>${producto.tipo}</h5>
                </div>
                <div class="precio">
                    <a href="#">${producto.precio}</a>
                </div>
                
            </div>
            `
        }   
    })
    .catch(error => console.log(error))
}





catalogo();
menuDesplegable();