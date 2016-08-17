/**
    * Created by Desarrollador 2 on 16/08/2016.
    */
System.register(['angular2/core', './highlight.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attributes-directives',
                        template: "\n\t<div [myHighlight]=\"'red'\">\n\t\tResaltame\n\t</div>\n\t<br><br>\n\t<div myHighlight>\n\t\tOtro resaltame\n\t</div>\n    ",
                        directives: [highlight_directive_1.HighlightDirective],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztNQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkg7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFWCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsaUlBUUw7d0JBQ0osVUFBVSxFQUFFLENBQUMsd0NBQWtCLENBQUM7cUJBQ2hDLENBQUM7O3VDQUFBO2dCQUtGLDBCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCxxREFHQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS5kaXJlY3RpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5cdCogQ3JlYXRlZCBieSBEZXNhcnJvbGxhZG9yIDIgb24gMTYvMDgvMjAxNi5cblx0Ki9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gJy4vaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXG5zZWxlY3RvcjogJ215LWF0dHJpYnV0ZXMtZGlyZWN0aXZlcycsXG50ZW1wbGF0ZTogYFxuXHQ8ZGl2IFtteUhpZ2hsaWdodF09XCIncmVkJ1wiPlxuXHRcdFJlc2FsdGFtZVxuXHQ8L2Rpdj5cblx0PGJyPjxicj5cblx0PGRpdiBteUhpZ2hsaWdodD5cblx0XHRPdHJvIHJlc2FsdGFtZVxuXHQ8L2Rpdj5cbiAgICBgLFxuXHRkaXJlY3RpdmVzOiBbSGlnaGxpZ2h0RGlyZWN0aXZlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVEaXJlY3RpdmVzXG57XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
