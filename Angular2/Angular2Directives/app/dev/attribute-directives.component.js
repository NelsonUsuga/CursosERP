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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7TUFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JIO2dCQUFBO2dCQUdBLENBQUM7Z0JBbEJEO29CQUFDLGdCQUFTLENBQUM7d0JBRVgsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsUUFBUSxFQUFFLGlJQVFMO3dCQUNKLFVBQVUsRUFBRSxDQUFDLHdDQUFrQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkFLRiwwQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQscURBR0MsQ0FBQSIsImZpbGUiOiJkZXYvYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcblx0KiBDcmVhdGVkIGJ5IERlc2Fycm9sbGFkb3IgMiBvbiAxNi8wOC8yMDE2LlxyXG5cdCovXHJcblxyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SGlnaGxpZ2h0RGlyZWN0aXZlfSBmcm9tICcuL2hpZ2hsaWdodC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblxyXG5zZWxlY3RvcjogJ215LWF0dHJpYnV0ZXMtZGlyZWN0aXZlcycsXHJcbnRlbXBsYXRlOiBgXHJcblx0PGRpdiBbbXlIaWdobGlnaHRdPVwiJ3JlZCdcIj5cclxuXHRcdFJlc2FsdGFtZVxyXG5cdDwvZGl2PlxyXG5cdDxicj48YnI+XHJcblx0PGRpdiBteUhpZ2hsaWdodD5cclxuXHRcdE90cm8gcmVzYWx0YW1lXHJcblx0PC9kaXY+XHJcbiAgICBgLFxyXG5cdGRpcmVjdGl2ZXM6IFtIaWdobGlnaHREaXJlY3RpdmVdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZXNcclxue1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
