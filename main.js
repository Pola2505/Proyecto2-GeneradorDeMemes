$botonDescargar.addEventListener("click", () => {
    // $card.style.width = "500px"
    domtoimage.toBlob($card).then((blob) => {
        saveAs(blob, "mi-meme.png");
    }).catch((error) =>{
        console.log (error)
    } ) ;

})

$cargarImagen.addEventListener("click", () => {
    $contenedorImagen.style.backgroundImage = `url(${$urlImagen.value})`
});