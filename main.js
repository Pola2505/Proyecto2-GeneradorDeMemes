// La funcion para atrapar los elementos del DOM

const $ = (element) => document.querySelector(element);

// --------------    ELEMENTOS DEL DOM -----------

const $card = $('#meme-card')
const $imgBtn = $('#img-btn');
const $textBtn = $('#text-btn')
const $aside = $('#edit-container-aside');
const $editImg = $('#edit-img');
const $editText = $('#edit-text');
const $closeBtn = $('#close-btn');
const $urlInput = $('#url-input');
const $imgCard = $('#img-card');
const $topText = $('#edit-top-text');
const $topCard = $('#top-text-card');
const $bottomText = $('#edit-bottom-text');
const $bottomCard = $('#bottom-text-card');
const $bgColor = $('#bg-color');
const $bgColorCode = $('#bg-color-code');
const $checkboxTop = $('#checkbox-top-text')
const $checkboxBottom = $('#checkbox-bottom');
const $brightness = $('#brightness');
const $opacity = $('#opacity');
const $contrast = $('#contrast');
const $blur = $('#blur');
const $grayscale = $('#grayscale');
const $sepia = $('#sepia');
const $hueRotate = $('#hue-rotate');
const $saturate = $('#saturate');
const $invert = $('#invert');
const $resetImg = $('#btn-reset-img');
const $resetText = $('#btn-reset-text');
const $downloadBtn = $('#download-btn');


// -------- HEADER botones - funciones ------------



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

$closeBtn.addEventListener('click', () => {
    $aside.classList.add('hidden');
    $editText.classList.add('hidden');
    $editImg.classList.add('hidden');
})

// ------------- CARD MEME ------------------------

$downloadBtn.addEventListener("click", () => {
    // $card.style.width = "500px"
    domtoimage.toBlob($card).then((blob) => {
        saveAs(blob, "mi-meme.png");
    }).catch((error) =>{
        console.log (error)
    } ) ;

})


// ---- PANEL IMAGEN - FUNCIONES PARA EL MANEJO DEL PANEL DE EDICION DE IMAGEN -----------



// La funcion para pegar la url de la imagen y que aparezca en el cuadrado del meme

$urlInput.addEventListener('input', () => {
    let url = $urlInput.value;
    $imgCard.style.backgroundImage = `url(${url})`;
    $imgCard.style.backgroundSize = 'cover';
    $imgCard.style.backgroundRepeat = 'no-repeat';
    $imgCard.backgroundPosition = 'center';
})

// La funcion para cambiar el color del fondo de la imagen y mostrar el codigo del color

$bgColor.addEventListener('input', () => {
    $imgCard.style.backgroundColor = $bgColor.value;
    $bgColorCode.innerText = $bgColor.value;
})

// Aplicando los filtros en la imagen 

$brightness.addEventListener('input', () => {

    $imgCard.style.filter = `brightness(${ $brightness.value })`;
   
});

$opacity.addEventListener('input', () => {
    
    $imgCard.style.filter = `opacity(${ $opacity.value })`;

});

$contrast.addEventListener('input', () => {
   
    $imgCard.style.filter = `contrast(${ $contrast.value }%)`;

});

$blur.addEventListener('input', () => {

    $imgCard.style.filter = `blur(${ $blur.value }px)`;

});

$grayscale.addEventListener('input', () => {
    
    $imgCard.style.filter = `grayscale(${ $grayscale.value }%)`;

});

$sepia.addEventListener('input', () => {

    $imgCard.style.filter = `sepia(${ $sepia.value }%)`;

});

$hueRotate.addEventListener('input', () => {

    $imgCard.style.filter = `hue-rotate(${ $hueRotate.value }deg)`;

});

$saturate.addEventListener('input', () => {

    $imgCard.style.filter = `saturate(${ $saturate.value }%)`;

});

$invert.addEventListener('input', () => {

    $imgCard.style.filter = `invert(${ $invert.value })`;

});

// Funcion para restablecer los valores cambiados;

$resetImg.addEventListener('click', () => {
    $urlInput.value = '';
    $imgCard.style.backgroundImage = '';
    $imgCard.style.backgroundColor = 'black';
    $bgColor.value = '#FFFFFF';
    $bgColorCode.innerText = $bgColor.value;
    $imgCard.style.filter = '';
})


// ---- PANEL TEXTO - FUNCIONES PARA EL MANEJO DEL PANEL DE EDICION DE TEXTO -----------




// Funcion para cargar el texto superior

$topText.addEventListener('input', () => {
    $topCard.innerText = $topText.value;
})

// Funcion para cargar el texto inferior

$bottomText.addEventListener('input', () => {
    $bottomCard.innerText = $bottomText.value;
})

// Funcion para mostrar el meme sin un texto superior 

$checkboxTop.addEventListener('input', (e) => {
    if( e.target.checked ) {
        $topCard.innerText = '';
    } else {
        $topCard.innerText = 'TOP TEXT'
    }
})

// Funcion para mostrar el meme sin un texto inferior

$checkboxBottom.addEventListener('input', (e) => {
    if( e.target.checked ) {
        $bottomCard.innerText = '';
    } else {
        $bottomCard.innerText = 'BOTTOM TEXT';
    }
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














// Esta función ayuda a verificar si el panel se cierra inesperadamente
const logCloseEvent = (event) => {
    console.log("Evento disparado:", event);
};

// Añadir a los eventos del panel que podrían cerrarlo
$aside.addEventListener('click', logCloseEvent);
$editImg.addEventListener('click', logCloseEvent);
$editText.addEventListener('click', logCloseEvent);
