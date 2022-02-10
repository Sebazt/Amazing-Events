/* este js. esta ligado al html de tarjeta, no fui capaz de delimitar los checkbox en dosgrupos ( campo y salón ) para que la busquedad no me quedara tan amplia*/

var inputBuscador = document.querySelector("#inputBusquedad");
var checkboxSelected = [];
var datos = [];




async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json =>{datos.push(...json.eventos)})
    
    displayFicha(datos)
    
    /* generamos el dato unico de los checkbox */
    let unica = datos.map(lista =>lista.category).sort();  
    const dataArray = new Set(unica); /* new set me elimina los datos que se repiten */
    let cates =[...dataArray];
    
    /* Creamos los checkbox dinamicamente.  sin funcionalidad atm*/
    
    var inputCheckbox = "";
    cates.forEach(cate =>{

        inputCheckbox += `<label class="micheckbox" ><input type="checkbox" class="checkboxCont" value="${cate}"> ${cate}</label>`        
    })
    document.querySelector("#checkboxEvento").innerHTML = inputCheckbox;
    
    /* ´Capturar datos del checkbox, cuando se haga clic o change capture el evento. */
    let checkBox = document.querySelectorAll(".checkboxCont");// esto es una NodelIst y no la reccorre map, sino forEach

    checkBox.forEach(check =>{
        check.addEventListener("change", function(){
/* aquí estoy definiendo que pasa cuándo se presiona o no el checkbox */
            if(check.checked == true){ /* checked es propiedad de los checkbox */
                checkboxSelected.push(check.value);
                console.log(checkboxSelected);
                dataCheck(checkboxSelected);
            }
            else{
                checkboxSelected = checkboxSelected.filter(unCheck => unCheck !== check.value)
                dataCheck(checkboxSelected);
            }
            console.log(checkboxSelected);
        })
    })
   
}
getData() /* cierro la función async */

    inputBuscador.addEventListener("keyup",buscador);


function buscador(event){
    let val = event.target.value;
    
    console.log(val);
    let data = datos.filter(lista => lista.name.toLowerCase().includes(val.toLowerCase()) || lista.date.includes(val)); 
    console.log(datos);
    displayFicha(data);
    console.log(data);
}

function displayFicha(data){  /* se deja por separado las funciones que modifican el dato de la función async */
    let toDisplay = [];
    if(data && data.length > 0){
        toDisplay.push(...data);
    }else{
        toDisplay.push(...datos);
    }

    var html = "";

    toDisplay.map(lista =>{ 

        html += `
        <div class="tarjeta">
        <div class="elementos__target">
            <h2 class="titulo__secundario__target">${lista.name}</h2>  
            <p class="parrafo2__target">${lista.description}</p>
            <p class="parrafo3__target">${lista.category}</p>
            <p class="parrafo2__target">${lista.place}</p>
            <p class="parrafo2__target">Fecha: ${lista.date}</p>
            <p class="parrafo4__target">$: ${lista.price}</p>
            <button class="botonCards"><a href="./detalles.html?id=${lista.id}" class="anclorsolo">Detalles</a></button>
        </div>
        <div class="imagen__target">
            <img src="${lista.image}" class="imagenCart">
        </div>
        </div>    
        `
    })


document.querySelector("#mainCards").innerHTML = html;

}


/* Checkbox */

var datos3 = [];
var campo = [];
var salon = [];

async function getData3(){
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json =>{datos3.push(...json.eventos)})
    console.log(datos3);
    campo.push(...datos3.filter(dat => !dat.place.toLowerCase().includes("salón")))
    console.log(campo);
    salon.push(...datos3.filter(dat => dat.place.toLowerCase().includes("salón")))

    console.log(salon);
}
getData3();


function dataCheck(checkboxSelected){ /* se deja por separado las funciones que modifican el dato */

    let data = [...datos3];
    let filtroPlaza = [];

    if(checkboxSelected.length > 0){
        checkboxSelected.map(plaza =>{

            let filtrado = data.filter(evento =>{

                return evento.category == plaza;
            })
            filtroPlaza.push(...filtrado);
        })
    }
    displayFicha(filtroPlaza);
}

/* esto es para futuras o pasadas */
var datos2 = [];
var fechaActual = [];
var pasados = [];


async function getData2() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json =>{datos2.push(json)})
    
    fechaActual.push(datos2[0].fechaActual);
    pasados.push(...datos2[0].eventos.filter(item =>item.date < fechaActual));
    

}
getData2();


/* selector */

var elementosFiltrados = [];
var selector = document.getElementById("select");

selector.addEventListener("change", function(event){
    if(event.target.value == "pasados"){
        elementosFiltrados = [];
        elementosFiltrados.push(...datos2[0].eventos.filter(item =>item.date < fechaActual));

    }else if(event.target.value == "proximos"){
        elementosFiltrados = [];
        elementosFiltrados.push(...datos2[0].eventos.filter(item =>item.date > fechaActual));
    }else{
        console.log("seleccione")
        elementosFiltrados = [];
        elementosFiltrados.push(...datos2[0].eventos)
    }
    displayFicha(elementosFiltrados);
})



var menorPrecio = []
var mayorprecio = []
console.log(datos)
function crearCheckbox(){
        for (let i = 0; i < unica.length; i++) {
            var menorPrecio = []
            if(unica < 300){
            menorPrecio.push(datos[0].name)   
        }else{
            mayorprecio.push(datos[0].name)
        }
        
    }
}

console.log(crearCheckbox())