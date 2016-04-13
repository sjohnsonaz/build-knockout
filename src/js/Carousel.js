ko.components.register('carousel', {
    viewModel: function (params) {
        var self = this;
        this.index = params.index || ko.observable(0);
        this.childCount = params.childCount || ko.observable(0);
        this.time = params.time || 500;
        this.index.subscribe(function (value) {
            var index = self.index();
            var childCount = self.childCount();
            index = (index + childCount) % childCount;
            if (value != index) {
                self.index(index);
            }
        });
    },
    template: '\
        <div class="carousel" data-bind="template: { data: $data, nodes: $componentTemplateNodes }, animatedSwitcher: { index: index, time: time, endClass: \'carousel-selected\', interimClass: \'carousel-selecting\', childCount: childCount }">\
        </div>\
    '
});

ko.bindingHandlers.animatedSwitcher = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        var index = ko.unwrap(value.index);
        var endClass = ko.unwrap(value.endClass);
        var carousel = $(element);
        var children = carousel.children();
        var child = $(children[index]);
        child.addClass(endClass);
        if (ko.isObservable(value.childCount)) {
            value.childCount(children.length);
        }
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        var index = ko.unwrap(value.index);
        var endClass = ko.unwrap(value.endClass);
        var interimClass = ko.unwrap(value.interimClass);
        var time = ko.unwrap(value.time) || 500;
        var carousel = $(element);
        var child = $(carousel.children()[index]);
        carousel.height(carousel.outerHeight());
        carousel.children().removeClass(endClass);
        carousel.children().removeClass(interimClass);
        child.addClass(interimClass);
        carousel.height(child.outerHeight());
        window.clearTimeout(element.animatedSwitcherTimeout);
        element.animatedSwitcherTimeout = window.setTimeout(function () {
            child.removeClass(interimClass);
            child.addClass(endClass);
            carousel.height('auto');
        }, time);
    }
};
