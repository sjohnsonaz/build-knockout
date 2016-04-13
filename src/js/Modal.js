ko.components.register('modal', {
    viewModel: function (params) {
        var self = this;
        this.open = params.open;
        this.clickClose = function (model, event) {
            event.stopPropagation();
            self.open(false);
        };
        this.clickStop = function (model, event) {
            event.stopPropagation();
        };
    },
    template: '\
        <div class="modal" data-bind="css: { \'modal-open\': open }, click: clickClose">\
            <div class="modal-content" data-bind="template: { data: $data, nodes: $componentTemplateNodes }, click: clickStop">\
            </div>\
        </div>\
    '
});
