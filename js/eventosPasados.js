var datos = [];
var fechaActual = [];
var pasados = [];


async function getData2() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json =>{datos.push(json)})
    
    fechaActual.push(datos[0].fechaActual);
    pasados.push(...datos[0].eventos.filter(item =>item.date < fechaActual));
    console.log(pasados);
    
    displayFicha(pasados)

}
getData2();

function displayFicha(data){ 
    let toDisplay = [];
    if(data && data.length > 0){
        toDisplay.push(...data);
    }else{
        toDisplay.push(datos);
    }

    var html = "";

    toDisplay.map(lista =>{ 

        html += `
        <div class="tarjeta">
        <div class="elementos__target">
            <a href="./tarjeta.html" class="titulo__secundario__target">${lista.name}</a>
            <p class="parrafo2__target">${lista.description}</p>
            <p class="parrafo3__target">${lista.category}</p>
            <p class="parrafo2__target">${lista.place}</p>
            <p class="parrafo2__target">Fecha: ${lista.date}</p>
            <p class="parrafo4__target">$: ${lista.price}</p>
        </div>
        <div class="imagen__target">
            <img src="${lista.image}" class="imagenCart">
        </div>
        </div>    
        `
    })


document.querySelector("#mainCards").innerHTML = html;

}