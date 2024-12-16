// La funcion para atrapar los elementos del DOM

const $ = (element) => document.querySelector(element);

// --------------    ELEMENTOS DEL DOM -----------

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



// ---- PANEL IMAGEN - FUNCIONES PARA EL MANEJO DEL PANEL DE EDICION DE IMAGEN -----------



// La funcion para pegar la url de la imagen y que aparezca en el cuadrado del meme

$urlInput.addEventListener('input', () => {
    const url = $urlInput.value;
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

// Funcion para sumar filtros - la cree porque tuve problemas que desaparecia la imagen cuando guarde los filtros anteriores en un auxiliar y intente concatenarlos

function applyFilter(filter) {
    let currentFilters = $imgCard.style.filter || ''; 

    if (!currentFilters.includes(filter)) {
        if (currentFilters !== '') {
            currentFilters += ' ';
        }
        currentFilters += filter;
    }

    $imgCard.style.filter = currentFilters;
}

// Aplicando la funcion a todos los filtros 

$brightness.addEventListener('input', () => {
    applyFilter(`brightness(${ $brightness.value })`);
});

$opacity.addEventListener('input', () => {
    applyFilter(`opacity(${ $opacity.value })`);
});

$contrast.addEventListener('input', () => {
    applyFilter(`contrast(${ $contrast.value })`);
});

$blur.addEventListener('input', () => {
    applyFilter(`blur(${ $blur.value })`);
});

$grayscale.addEventListener('input', () => {
    applyFilter(`grayscale(${ $grayscale.value })`);
});

$sepia.addEventListener('input', () => {
    applyFilter(`sepia(${ $sepia.value })`);
});

$hueRotate.addEventListener('input', () => {
    applyFilter(`hue-rotate(${ $hueRotate.value }deg)`);
});

$saturate.addEventListener('input', () => {
    applyFilter(`saturate(${ $saturate.value })`);
});

$invert.addEventListener('input', () => {
    applyFilter(`invert(${ $invert.value })`);
});


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
