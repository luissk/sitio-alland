'use strict'

$(function(){
    const img = document.querySelector('#img'),
        wraper = document.querySelector('#image-wrap'),
        src_wraper = wraper.getAttribute('data-src');

    img.addEventListener('mousemove', function (e) {
        let src = img.getAttribute('src');
        wraper.style.backgroundImage = "url('"+src_wraper+"')";

        let width = wraper.offsetWidth;
        let height = wraper.offsetHeight;
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        
        let bgPosX = (mouseX / width * 100);
        let bgPosY = (mouseY / height * 100);
        
        wraper.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        wraper.style.backgroundSize = "220%";
        img.style.opacity = "0";
    });

    img.addEventListener('mouseleave', function () {
        wraper.style.backgroundPosition = "center";
        wraper.style.backgroundSize = "100%";
        img.style.opacity = "1";
    });

    img.addEventListener('touchmove', function (e) {
        e.preventDefault();
        let src = img.getAttribute('src');
        wraper.style.backgroundImage = "url('"+src_wraper+"')";

        let width = wraper.offsetWidth;
        let height = wraper.offsetHeight;
        let mouseX = e.touches[0].clientX;
        let mouseY = e.touches[0].clientY;
        
        let bgPosX = (mouseX / width * 100);
        let bgPosY = (mouseY / height * 100);
        
        wraper.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        wraper.style.backgroundSize = "220%";
        img.style.opacity = "0";
    });

    img.addEventListener('touchend', function (e) {
        wraper.style.backgroundPosition = "center";
        wraper.style.backgroundSize = "100%";
        img.style.opacity = "1";
    });
});