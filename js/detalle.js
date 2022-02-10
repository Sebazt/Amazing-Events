/* En esta pag. se declara la funcionalidad de pag detalle de cartas. vinculado a detalles.html */

var datos = [];

async function getData(){
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(respuesta => respuesta.json())
    .then(json =>{datos.push(...json.eventos)})
    console.log(datos);

    var id = datos.map(date => date.id)
    console.log(id);

    var id = location.search.split("?id=").filter(Number)
    var selecionarId = Number(id[0])
    console.log(selecionarId);
    var lista = datos.find(function(lista){
        return lista.id == selecionarId
    })


    var html = 
        `
        <div class="tarjeta">
        <div class="elementos__target">
            <h2 class="titulo__secundario__target">${lista.name}</h2>  
            <p class="parrafo2__target">${lista.description}</p>
            <p class="parrafo3__target">${lista.category}</p>
            <p class="parrafo2__target">${lista.place}</p>
            <p class="parrafo2__target">Fecha: ${lista.date}</p>
            <p class="parrafo4__target">$: ${lista.price}</p>
            <p class="parrafo2__target">Capacidad : ${lista.capacity}</p>
            <p class="parrafo2__target">Categoria : ${lista.category}</p>
        </div>
        <div class="imagen__target">
            <img src="${lista.image}" class="imagenCart">
        </div>
        </div>    
        `
        document.querySelector("#mainCards").innerHTML = html;


    fecha();

}   

getData();

function fecha(){
    /* var dato = new Date();

    var dia = dato.getDate();
    var mes = dato.getMonth() + 1;
    var anio = dato.getFullYear();
    var fechaConcat = `Nuestra fecha actual es: ${dia}/${mes}/${anio}` */

    var fecha = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var localfch2 = fecha.toLocaleDateString('es-CO', options)


    var formato = document.getElementById("formato")
    var formatoHtml = `
    <p class="fecha">${localfch2}</p>
    `
    formato.innerHTML = formatoHtml;
}
