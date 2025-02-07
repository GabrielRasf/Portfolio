
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var partes = document.querySelectorAll('header');

    partes.forEach(function(parte) {
        var opacity = 1 - scrollPosition / 850;
        parte.style.opacity = opacity;

        if (opacity < 0) opacity = 0;
    });
});
