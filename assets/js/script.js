let listanNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let indiceModificacion = null; 

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    console.log(nombreGasto);
    console.log(valorGasto);
    listanNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto);
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos =document.getElementById('listaDeGastos');
    const totalElementos =document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos= 0;
    listanNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        const descripcionGasto = listaDescripcionGastos [posicion];
        htmlLista = htmlLista + `<li>${elemento} - ${descripcionGasto} - USD ${valorGasto.toFixed(2)} 
         <button  onclick="modificarGasto(${posicion});">Modificar</button>
         <button  class="eliminar" onclick="eliminarGasto(${posicion});">Eliminar</button> </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        if(valorGasto > 150.00){
            alert ("CUIDADO:El total de este gasto supera los 150")};
        
});
    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    
    limpiar();
}


function limpiar(){
    document.getElementById('nombreGasto').value=''
    document.getElementById('valorGasto').value=''
    document.getElementById('descripcionGasto').value=''
}


function eliminarGasto(posicion){
    listanNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificarGasto(posicion){
     document.getElementById('nombreGasto').value = listanNombresGastos[posicion];
     document.getElementById('valorGasto').value = listaValoresGastos[posicion];
     document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
     
     indiceModificacion= posicion;
     
     
}
function actualizarGasto(){
    if (indiceModificacion !== null){
    
     listanNombresGastos[indiceModificacion] = document.getElementById('nombreGasto').value;
     listaValoresGastos[indiceModificacion]= document.getElementById('valorGasto').value;
     listaDescripcionGastos[indiceModificacion]= document.getElementById('descripcionGasto').value;
     console.log(indiceModificacion)
     actualizarListaGastos();
     limpiar();
     } 
    }
   
    // const agregarBoton = document.getElementById('agregarGasto');
    // const actualizarBoton = document.createElement('button')
    // actualizarBoton.textContent = 'Actualizar Gasto';
    // actualizarBoton.id = 'nuevoBoton';
    // actualizarBoton.onclick = actualizarGasto();
    // agregarBoton.parentNode.replaceChild(actualizarBoton, agregarBoton);
    
    
