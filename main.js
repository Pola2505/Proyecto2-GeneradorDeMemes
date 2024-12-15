// La funcion para atrapar los elementos del DOM

const $ = (element) => document.querySelector(element);

// Atrapando los elementos del DOM 

const $imgBtn = $('#img-btn');
const $textBtn = $('#text-btn')
const $aside = $('#edit-container-aside');
const $editImg = $('#edit-img');
const $editText = $('#edit-text');
const $closeBtn = $('#close-btn');
const $urlInput = $('#url-input');
const $imgCard = $('#img-card');


// Abrir las opciones de edicion de imagen

$imgBtn.addEventListener('click', () => {
    $aside.classList.remove('hidden');
    $editImg.classList.remove('hidden');
    $editText.classList.add('hidden');
})

// Abrir las opciones de edicion del texto

$textBtn.addEventListener('click', () => {
    $aside.classList.remove('hidden');
    $editText.classList.remove('hidden');
    $editImg.classList.add('hidden');
})

// La funcion de cerrar el panel de control - por las dudas lo aplique para todos los 3 elementos

// $closeBtn.addEventListener('click', () => {
//     $aside.classList.add('hidden');
//     $editText.classList.add('hidden');
//     $editImg.classList.add('hidden');
// })

// La funcion para pegar la url de la imagen y que aparezca en el cuadrado del meme

$urlInput.addEventListener('input', () => {
    const url = $urlInput.value;
    $imgCard.style.backgroundImage = `url(${url})`;
    $imgCard.style.backgroundSize = 'cover';
    $imgCard.style.backgroundRepeat = 'no-repeat';
    $imgCard.backgroundPosition = 'center';
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