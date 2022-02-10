/* con este archivo fue como se desarrollo la actividad con los primeros 7 datos del obj, no la utilice para la entrega final ya que se edifico en función de cada uno de los eventos. */

var datos = [];
var porcentajeAsistencia = [];
var porcentajeAsistencia2 = [];
var mayorCapacidad = []
var ingresoCategoria = []


async function getData(){
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json()) 
    .then(json =>{datos.push(...json.eventos)}) 
    
    data(datos)   
    data1(datos)
    data2(datos)
    data3(datos)
} 
getData();


function data(datos){
var fila = document.querySelector("#porcentajedeasistencia")
datos.forEach(data => {
    if(data.assistance == undefined){
        porcentajeAsistencia.push(" Evento futuro")
    }else{porcentajeAsistencia.push(Math.round((data.assistance * 100) / data.capacity) +" %")}
    })
    var html ="";
    porcentajeAsistencia.map(item => {
        html +=
        `
        <td>${item}%</td>
        `
        var td = document.createElement("td")
        
        fila.append(td)
        td.append(item)
    })
    
}
    
    function data1(datos){
    var fila1 = document.querySelector("#mayorCapacidad")
    datos.forEach(data1 => {
            mayorCapacidad.push(data1.capacity)

        console.log(mayorCapacidad);
    
    
    })
    var html =""
    mayorCapacidad.map(item1 => {
    html +=
    `
    <td>${item1}%</td>
    `
    var td = document.createElement("td")
    
    fila1.append(td)
    td.append(item1)
    
    
})

}

    function data2(datos){
    var fila2 = document.querySelector("#ingresoCategoria")

    datos.forEach(data2 => {
        if(data2.assistance == undefined){
                ingresoCategoria.push("Evento futuro")
            }else{ingresoCategoria.push(data2.assistance * data2.price +" $")}
        })
        var html =""
        ingresoCategoria.map(item2 => {
            html +=
            `
            <td>${item2}%</td>
            `
            var td = document.createElement("td")
            
            fila2.append(td)
            td.append(item2)
        })
        
}


function data3(datos){
    var fila2 = document.querySelector("#porcentajedeasistencia2")
    datos.forEach(data => {
        if(data.assistance == undefined){
            porcentajeAsistencia2.push("Sin definir")
        }else{porcentajeAsistencia2.push(Math.round((data.assistance * 100) / data.capacity) +" %")}
        })
        var html ="";
        porcentajeAsistencia2.map(item => {
            html +=
            `
            <td>${item}</td>
            `
            var td = document.createElement("td")
            
            fila2.append(td)
            td.append(item)
        })
        
    }