$('.owl-carousel').owlCarousel({
    loop: true, //navegar infinitamente, se false => quando chegar ao fim, ele para
    margin: 10,
    nav: false, //são os <> de navegação => true
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
})