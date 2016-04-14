ko.components.register('expander', {
    viewModel: function (params) {
        var self = this;
        this.open = params.open || ko.observable(false);
        this.clickOpen = function () {
            self.open(!self.open());
        };
    },
    template: '\
        <section class="section">\
            <header>Containers</header>\
            <div class="section-content">\
            </div>\
        </section>\
    '
});
