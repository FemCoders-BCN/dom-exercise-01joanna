// const changeImage = function() {
//     const blackCar = document.getElementById("blackcar")
//     blackCar.src = "./public/img/graycar.jpg"
    

// }

// document.getElementById("btnAgregar").addEventListener("click", changeImage);

document.addEventListener('DOMContentLoaded', function() {
    var rojoBtn = document.getElementById('redcolor');
    var grisBtn = document.getElementById('graycolor');
    var blackBtn = document.getElementById('blackcolor');
    var imagen = document.getElementById('blackcar');
    var btnAgregar = document.getElementById('button');
    var tagName = document.getElementById('tag');



    rojoBtn.addEventListener('click', function() {
        cambiarImagen('./public/img/redcar.jpg', 'Imagen Roja');
        cambiarBoton('red')
    });

    grisBtn.addEventListener('click', function() {
        cambiarImagen('./public/img/graycar.jpg', 'Imagen Gris');
        cambiarBoton('gray')
    });

    blackBtn.addEventListener('click', function() {
        cambiarImagen('./public/img/blackcar.jpg', 'Imagen Negra');
        cambiarBoton('black')
    });

    function cambiarImagen(src, alt) {
        imagen.src = src;
        imagen.alt = alt;

    }
    function cambiarBoton(color){
        btnAgregar.style.backgroundColor = color;
        tagName.style.backgroundColor = color;
    }
});