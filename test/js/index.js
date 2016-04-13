$(function () {
    window.viewModel = new function () {
        var self = this;
        this.modalOpen = ko.observable(false);
        this.clickOpenModal = function () {
                self.modalOpen(true);
            },
            this.carouselIndex = ko.observable(0);
        this.carouselCount = ko.observable(0);
        this.clickCarouselNext = function (data, event) {
            var carouselIndex = self.carouselIndex();
            carouselIndex++;
            self.carouselIndex(carouselIndex);
        };
        this.clickCarouselBack = function (data, event) {
            var carouselIndex = self.carouselIndex();
            carouselIndex--;
            self.carouselIndex(carouselIndex);
        };
    };
    ko.applyBindings(viewModel);

    $('#clickShowNotifications').click(function (event) {
        $('.notification-container').toggleClass('hidden');
    });

    $('.tab-container').each(function (index, element) {
        var ul = $($(element).children()[0]);
        var div = $($(element).children()[1]);
        ul.children().each(function (index, element) {
            $(element).first('a').click(function (event) {
                ul.children().removeClass('tab-active');
                div.children().removeClass('tab-active');
                $(element).addClass('tab-active');
                $(div.children()[index]).addClass('tab-active');
            });
        });
    });
});
