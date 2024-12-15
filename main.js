// La funcion para atrapar los elementos del DOM

const $ = (element) => document.querySelector(element);

// Atrapando los elementos del DOM 

const $imgBtn = $('#img-btn');
const $aside = $('#edit-container-aside');
const $editImg = $('#edit-img');




// Funcion para abrir la seccion de Imagen 

$imgBtn.addEventListener('click', () => {
    $aside.classList.remove('hidden');
    $editImg.classList.remove('hidden');
})








// $botonDescargar.addEventListener("click", () => {
//     // $card.style.width = "500px"
//     domtoimage.toBlob($card).then((blob) => {
//         saveAs(blob, "mi-meme.png");
//     }).catch((error) =>{
//         console.log (error)
//     } ) ;

// })

// $cargarImagen.addEventListener("click", () => {
//     $contenedorImagen.style.backgroundImage = `url(${$urlImagen.value})`
// });