//estas son las variables
const carrito = document.querySelector('#carrito');
const contenedorCarritos = document.querySelector("#lista-carrito");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("lista-cursos");

cargarEventListeners();
function cargarEventListeners();{
      //cuando agregas un curso presionando "Agregar al carrito"
listaCursos.addEventListener('click', agregarCurso);
} 
  

//functions
function agregarCurso(e){
    e.preventDefault
    if(e.target.classList.contains('agregar-carrito')){
        console.log("presionaste el boton");

    }
}
 
