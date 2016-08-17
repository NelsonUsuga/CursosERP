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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O01BRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CSDtnQkFBQTtnQkFHQSxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUVYLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBRSxpSUFRTDt3QkFDSixVQUFVLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFDaEMsQ0FBQzs7dUNBQUE7Z0JBS0YsMEJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHFEQUdDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuXHQqIENyZWF0ZWQgYnkgRGVzYXJyb2xsYWRvciAyIG9uIDE2LzA4LzIwMTYuXG5cdCovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SGlnaGxpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2hpZ2hsaWdodC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblxuc2VsZWN0b3I6ICdteS1hdHRyaWJ1dGVzLWRpcmVjdGl2ZXMnLFxudGVtcGxhdGU6IGBcblx0PGRpdiBbbXlIaWdobGlnaHRdPVwiJ3JlZCdcIj5cblx0XHRSZXNhbHRhbWVcblx0PC9kaXY+XG5cdDxicj48YnI+XG5cdDxkaXYgbXlIaWdobGlnaHQ+XG5cdFx0T3RybyByZXNhbHRhbWVcblx0PC9kaXY+XG4gICAgYCxcblx0ZGlyZWN0aXZlczogW0hpZ2hsaWdodERpcmVjdGl2ZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlc1xue1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
