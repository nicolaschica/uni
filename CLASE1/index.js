// function cambiar_texto() {
//     document.getElementById("title").innerHTML = "Cambió el texto";
// }

const productInput = document.getElementById('inputText');
const aggbtn = document.getElementById('botonAgregar');
const listproduct = document.getElementById('list');
const dtlbtn = document.getElementById('botonEliminar');


aggbtn.addEventListener('click', function () {
    const nuevoproducto = productInput.value;
    if (nuevoproducto === '') return;


    const productlist = document.createElement('li');
    productlist.textContent = nuevoproducto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
   

    botonEliminar.addEventListener('click', function () {
        listproduct.removeChild(productlist);
    });

    productlist.appendChild(botonEliminar);
    listproduct.appendChild(productlist);
       
    productInput.value = '';
});