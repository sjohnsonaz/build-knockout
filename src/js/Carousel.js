ko.components.register('Carousel', {
    viewModel: function (params) {
        this.index = params.index || ko.observable(0);
        this.slideCount = ko.observable(0);
    },
    template: '\
        <div class="carousel">\
        </div>\
    '
});
var carouselIndex = 0;
var carouselCount = 3;
var timeout;
$(function () {
    function runCarousel(index) {
        var carousel = $('.carousel');
        var child = $(carousel.children()[index]);
        carousel.height(carousel.outerHeight());
        carousel.children().removeClass('carousel-selected');
        carousel.children().removeClass('carousel-selecting');
        child.addClass('carousel-selecting');
        carousel.height(child.outerHeight());
        window.clearTimeout(timeout);
        timeout = window.setTimeout(function () {
            child.removeClass('carousel-selecting');
            child.addClass('carousel-selected');
            carousel.height('auto');
        }, 500);
    }

    $('#clickCarouselNext').click(function (event) {
        carouselIndex++;
        carouselIndex = (carouselIndex + carouselCount) % carouselCount;
        runCarousel(carouselIndex);
    });
    $('#clickCarouselBack').click(function (event) {
        carouselIndex--;
        carouselIndex = (carouselIndex + carouselCount) % carouselCount;
        runCarousel(carouselIndex);
    });
})
