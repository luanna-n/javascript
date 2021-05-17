$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 3 //proximo de 0px => 1 elemento
        },
        600: { //quando a tela tem +600px => 3 elementos
            items: 5
        },
        1000: { //quando a tela tem +1000 px => 5 elementos
            items: 8
        }
    }
});