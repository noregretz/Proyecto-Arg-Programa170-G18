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
    fetch("database.json")
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