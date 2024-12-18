// La funcion para atrapar los elementos del DOM

const $ = (element) => document.querySelector(element);

// 
// ------------------------------------------------------- ELEMENTOS DEL DOM y muchos... --------------------------------------------------------------
const $body = $('body');
const $header = $('#container-header');
const $card = $('#meme-card');
const $imgBtn = $('#img-btn');
const $textBtn = $('#text-btn');
const $lightModeBtn = $('#light-mode-btn');
const $darkModeBtn = $('#dark-mode-btn');
const $aside = $('#edit-container-aside');
const $editImg = $('#edit-img');
const $editText = $('#edit-text');
const $closeBtn = $('#close-btn');
const $urlInput = $('#url-input');
const $imgCard = $('#img-card');
const $topText = $('#edit-top-text');
const $topCard = $('#top-text-card');
const $selectBlend = $('#select-mode-bg');
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
const $selectFont = $('#select-font');
const $fontSize = $('#font-size');
const $alignLeft = $('#align-left');
const $alignCenter = $('#align-center');
const $alignRight = $('#align-right');
const $textColor = $('#text-color');
const $textBgColor = $('#text-bg-color');
const $checkboxTransparent = $('#checkbox-transparent');
const $shadowNone = $('#shadow-none');
const $shadowWhite = $('#shadow-white');
const $shadowBlack = $('#shadow-black');
const $inputPadding = $('#input-padding');
const $interlineado = $('#interlineado');
const $colorCodeTxt = $('#color-code-txt');
const $bgCodeTxt = $('#bg-code-txt');


// -------------------------------------------------------------- HEADER --------------------------------------------------------------------------



// Abrir el panel de imagen

$imgBtn.addEventListener('click', () => {
    $aside.classList.remove('hidden');
    $editImg.classList.remove('hidden');
    $editText.classList.add('hidden');
})

// Abrir el panel de texto

$textBtn.addEventListener('click', () => {
    $aside.classList.remove('hidden');
    $editText.classList.remove('hidden');
    $editImg.classList.add('hidden');
})

// El boton de cerrar los paneles 

$closeBtn.addEventListener('click', () => {
    $aside.classList.add('hidden');
    $editText.classList.add('hidden');
    $editImg.classList.add('hidden');
})

// Cambiar de modo oscuro al modo claro y del claro al oscuro

$lightModeBtn.addEventListener('click', () => {
    $header.classList.remove('dark-theme-header');
    $header.classList.add('light-theme-header');
    $body.classList.remove('dark-theme-body');
    $body.classList.add('light-theme-body');
    $aside.classList.remove('dark-theme-aside');
    $aside.classList.add('light-theme-aside');
    $darkModeBtn.classList.remove('hidden');
    $lightModeBtn.classList.add('hidden');
    $bgColorCode.style.color = 'white';
    $closeBtn.style.color = 'black';
    $bgCodeTxt.style.color = 'white';
    $colorCodeTxt.style.color = 'white';
});

$darkModeBtn.addEventListener('click', () => {
    $header.classList.remove('light-theme-header');
    $header.classList.add('dark-theme-header');
    $body.classList.remove('light-theme-body');
    $body.classList.add('dark-theme-body');
    $aside.classList.remove('light-theme-aside');
    $aside.classList.add('dark-theme-aside');
    $darkModeBtn.classList.add('hidden');
    $lightModeBtn.classList.remove('hidden');
    $closeBtn.style.color = 'white';
})



// --------------------------------------------------------------- MEME -------------------------------------------------------------------------

// El boton para descargar el meme

$downloadBtn.addEventListener("click", () => {

    domtoimage.toBlob($card).then((blob) => {
        saveAs(blob, "mi-meme.png");
    }).catch((error) => {
        console.log (error)
    });

})



// -------------------------------------------------------------- IMAGEN -------------------------------------------------------------------------



// La funcion de cargar la imagen en la URL

$urlInput.addEventListener('input', () => {
    let url = $urlInput.value;
    $imgCard.style.backgroundImage = `url(${url})`;
    $imgCard.style.backgroundSize = 'cover';
    $imgCard.style.backgroundRepeat = 'no-repeat';
    $imgCard.style.backgroundPositionX = 'center';
    $imgCard.style.backgroundPositionY = 'center';
})

// La funcion para cambiar el color del fondo de la imagen y mostrar el codigo del color

$bgColor.addEventListener('input', () => {
    $imgCard.style.backgroundColor = $bgColor.value;
    $bgColorCode.innerText = $bgColor.value;
})

// La funcion de background-blend-mode en la imagen

$selectBlend.addEventListener('input', () => {
    $imgCard.style.backgroundBlendMode = `${$selectBlend.value}`;
})


// Almacenar los valores predeterminados de los filtros en una variable

let currentFilters = {
    brightness: 1,
    opacity: 1,
    contrast: 100,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    hueRotate: 0,
    saturate: 100, 
    invert: 0
}

// la funcion para acumular todos los filtros pero actualizar si alguno cambia - lo hice asi porque con el aux lo que me pasaba era que los filtros se aplicaban varias veces y la imagen desaparecia y con esto me funciono

const applyFilters = () => {
    $imgCard.style.filter = `
        brightness(${currentFilters.brightness})
        opacity(${currentFilters.opacity})
        contrast(${currentFilters.contrast}%)
        blur(${currentFilters.blur}px)
        grayscale(${currentFilters.grayscale}%)
        sepia(${currentFilters.sepia}%)
        hue-rotate(${currentFilters.hueRotate}deg)
        saturate(${currentFilters.saturate}%)
        invert(${currentFilters.invert})
    `
}

// aplicando los escuchadores a todos los filtros de la imagen

$brightness.addEventListener('input', () => {
    currentFilters.brightness = $brightness.value;
    applyFilters();
})

$opacity.addEventListener('input', () => {
    currentFilters.opacity = $opacity.value;
    applyFilters();
})

$contrast.addEventListener('input', () => {
    currentFilters.contrast = $contrast.value;
    applyFilters();
})

$blur.addEventListener('input', () => {
    currentFilters.blur = $blur.value;
    applyFilters();
})

$grayscale.addEventListener('input', () => {
    currentFilters.grayscale = $grayscale.value;
    applyFilters();
})

$sepia.addEventListener('input', () => {
    currentFilters.sepia = $sepia.value;
    applyFilters();
})

$hueRotate.addEventListener('input', () => {
    currentFilters.hueRotate = $hueRotate.value;
    applyFilters();
})

$saturate.addEventListener('input', () => {
    currentFilters.saturate = $saturate.value;
    applyFilters();
})

$invert.addEventListener('input', () => {
    currentFilters.invert = $invert.value;
    applyFilters();
})

// Funcion para restablecer los valores en la imagen y que el rango vuelva a su lugar

$resetImg.addEventListener('click', () => {
    $urlInput.value = '';
    $imgCard.style.backgroundImage = '';
    $imgCard.style.backgroundColor = 'black';
    $imgCard.style.backgroundBlendMode = 'unset';
    $selectBlend.value = '';
    $bgColor.value = '#FFFFFF';
    $bgColorCode.innerText = $bgColor.value;
    $imgCard.style.filter = '';

    currentFilters = {
        brightness: 1,
        opacity: 1,
        contrast: 100,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        hueRotate: 0,
        saturate: 100, 
        invert: 0
    }

    $brightness.value = 1;
    $opacity.value = 1;
    $contrast.value = 100;
    $blur.value = 0;
    $grayscale.value = 0;
    $sepia.value = 0;
    $hueRotate.value = 0;
    $saturate.value = 100;
    $invert.value = 0;
})




// -------------------------------------------------------------- TEXTO ---------------------------------------------------------------------------


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
        $topCard.style.display = 'none';
    } else {
        $topCard.innerText = 'TOP TEXT';
        $topCard.style.display = 'block';
    }
})

// Funcion para mostrar el meme sin un texto inferior

$checkboxBottom.addEventListener('input', (e) => {
    if( e.target.checked ) {
        $bottomCard.innerText = '';
        $bottomCard.style.display = 'none';
    } else {
        $bottomCard.innerText = 'BOTTOM TEXT';
        $bottomCard.style.display = 'block';
    }
})

// Funcion para cambiar la fuente del texto dentro del $card

$selectFont.addEventListener('input', () => {
    $card.style.fontFamily = `${$selectFont.value}, sans-serif`;
})

// Cambia el tamano de la fuenta en el meme

$fontSize.addEventListener('input', () => {
    $topCard.style.fontSize = `${$fontSize.value}px`;
    $bottomCard.style.fontSize = `${$fontSize.value}px`;
})

// Alineacion del texto - izquierda, derecha y centro en topCard y bottomCard

$alignLeft.addEventListener('click', () => {
    $topCard.style.textAlign = `${$alignLeft.value}`;
    $bottomCard.style.textAlign = `${$alignLeft.value}`;
})

$alignCenter.addEventListener('click', () => {
    $topCard.style.textAlign = `${$alignCenter.value}`;
    $bottomCard.style.textAlign = `${$alignCenter.value}`;
})

$alignRight.addEventListener('click', () => {
    $topCard.style.textAlign = `${$alignRight.value}`;
    $bottomCard.style.textAlign = `${$alignRight.value}`;
})

// Cambiar el color del texto en TOP TEXT Y BOTTOM TEXT

$textColor.addEventListener('input', () => {
    $topCard.style.color = `${$textColor.value}`;
    $bottomCard.style.color = `${$textColor.value}`;
    $colorCodeTxt.innerText = `${$textColor.value}`;
})

// Cambiar el color de fondo en TOP TEXT Y BOTTOM TEXT

$textBgColor.addEventListener('input', () => {
    $topCard.style.backgroundColor = `${$textBgColor.value}`;
    $bottomCard.style.backgroundColor = `${$textBgColor.value}`;
    $bgCodeTxt.innerText = `${$textBgColor.value}`;
})

// Poner el fondo transparente al texto

$checkboxTransparent.addEventListener('input', (e) => {

    if(e.target.checked) {
        $topCard.style.backgroundColor = 'transparent';
        $bottomCard.style.backgroundColor = 'transparent';
        $topCard.style.position = 'absolute';
        $topCard.style.top = 0;
        $topCard.style.left = '250px';
        $bottomCard.style.position = 'absolute';
        $bottomCard.style.bottom = 0;
        $bottomCard.style.left = '250px';
        $card.style.position ='relative';
    } else {
        $topCard.style.backgroundColor = `${$textBgColor.value}`;
        $bottomCard.style.backgroundColor = `${$textBgColor.value}`;
        $topCard.style.position = 'static'
        $bottomCard.style.position = 'static'
        $card.style.position = 'static';
    }

})

// Hacer el text shadow en la parte de contorno - ninguno, claro y oscuro

$shadowNone.addEventListener('click', () => {
    $topCard.style.textShadow = 'none';
    $bottomCard.style.textShadow = 'none';
})

$shadowWhite.addEventListener('click', () => {
    $topCard.style.textShadow = 'rgb(255, 255, 255) 2px 2px 0px, rgb(255, 255, 255) -2px 2px 0px, rgb(255, 255, 255) 2px -2px 0px, rgb(255, 255, 255) -2px -2px 0px';
    $bottomCard.style.textShadow = 'rgb(255, 255, 255) 2px 2px 0px, rgb(255, 255, 255) -2px 2px 0px, rgb(255, 255, 255) 2px -2px 0px, rgb(255, 255, 255) -2px -2px 0px';
})

$shadowBlack.addEventListener('click', () => {
    $topCard.style.textShadow = 'rgb(0, 0, 0) 2px 2px 0px, rgb(0, 0, 0) -2px 2px 0px, rgb(0, 0, 0) 2px -2px 0px, rgb(0, 0, 0) -2px -2px 0px';
    $bottomCard.style.textShadow = 'rgb(0, 0, 0) 2px 2px 0px, rgb(0, 0, 0) -2px 2px 0px, rgb(0, 0, 0) 2px -2px 0px, rgb(0, 0, 0) -2px -2px 0px';
})

// Espaciado al texto - padding 

$inputPadding.addEventListener('input', () => {
    $topCard.style.padding = `${$inputPadding.value}px`;
    $bottomCard.style.padding = `${$inputPadding.value}px`;
})

// Funcion de interlineado - line-height

$interlineado.addEventListener('input', () => {
    $topCard.style.lineHeight = `${$interlineado.value}`;
    $bottomCard.style.lineHeight = `${$interlineado.value}`;
})

// Restablecer los filtros del texto

$resetText.addEventListener('click', () => {
    $topCard.innerText = 'TOP TEXT';
    $topText.value = '';
    $bottomCard.innerText = 'BOTTOM TEXT';
    $bottomText.value = '';
    $checkboxBottom.checked = false;
    $checkboxTop.checked = false;
    $card.style.fontFamily = `"Michroma", sans-serif`;
    $selectFont.value = 'Orbitron';
    $topCard.style.fontSize = '23px';
    $bottomCard.style.fontSize = '23px';
    $fontSize.value = 23;
    $topCard.style.textAlign = `${$alignCenter.value}`;
    $bottomCard.style.textAlign = `${$alignCenter.value}`;
    $topCard.style.color = 'black';
    $bottomCard.style.color = 'black';
    $topCard.style.backgroundColor = 'white';
    $bottomCard.style.backgroundColor = 'white';
    $textColor.value = '#000000';
    $textBgColor.value = '#FFFFFF';
    $topCard.style.lineHeight = '';
    $bottomCard.style.lineHeight = '';
    $interlineado.value = '';
    $inputPadding.value = 35;
    $topCard.style.padding = '35px';
    $bottomCard.style.padding = '35px';
    $topCard.style.textShadow = 'none';
    $bottomCard.style.textShadow = 'none';
})













