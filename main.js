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
})

// Cambiar el color de fondo en TOP TEXT Y BOTTOM TEXT

$textBgColor.addEventListener('input', () => {
    $topCard.style.backgroundColor = `${$textBgColor.value}`;
    $bottomCard.style.backgroundColor = `${$textBgColor.value}`;
})

// Poner el fondo transparente al texto

$checkboxTransparent.addEventListener('input', (e) => {

    if(e.target.checked) {
        $topCard.style.backgroundColor = 'transparent';
        $bottomCard.style.backgroundColor = 'transparent';
    } else {
        $topCard.style.backgroundColor = `${$textBgColor.value}`;
        $bottomCard.style.backgroundColor = `${$textBgColor.value}`;
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












