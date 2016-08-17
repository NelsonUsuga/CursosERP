System.register(['angular2/core', './attribute.directive', "./structural.directive"], function(exports_1, context_1) {
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
    var core_1, attribute_directive_1, structural_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directive_1_1) {
                attribute_directive_1 = attribute_directive_1_1;
            },
            function (structural_directive_1_1) {
                structural_directive_1 = structural_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>Directives</h1>\n\t\t\n\t\t<h2>Attribute directives</h2>\n        <my-attributes-directives></my-attributes-directives>\n        \n        <h2>Structural directives</h2>\n        <my-structural-directives></my-structural-directives>\n    ",
                        directives: [attribute_directive_1.AttributeDirectives, structural_directive_1.StructuralDirectives],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBQQVFUO3dCQUNKLFVBQVUsRUFBRSxDQUFDLHlDQUFtQixFQUFFLDJDQUFvQixDQUFDO3FCQUN2RCxDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUNBR0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVzfSBmcm9tICcuL2F0dHJpYnV0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc30gZnJvbSBcIi4vc3RydWN0dXJhbC5kaXJlY3RpdmVcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8aDE+RGlyZWN0aXZlczwvaDE+XG5cdFx0XG5cdFx0PGgyPkF0dHJpYnV0ZSBkaXJlY3RpdmVzPC9oMj5cbiAgICAgICAgPG15LWF0dHJpYnV0ZXMtZGlyZWN0aXZlcz48L215LWF0dHJpYnV0ZXMtZGlyZWN0aXZlcz5cbiAgICAgICAgXG4gICAgICAgIDxoMj5TdHJ1Y3R1cmFsIGRpcmVjdGl2ZXM8L2gyPlxuICAgICAgICA8bXktc3RydWN0dXJhbC1kaXJlY3RpdmVzPjwvbXktc3RydWN0dXJhbC1kaXJlY3RpdmVzPlxuICAgIGAsXG5cdGRpcmVjdGl2ZXM6IFtBdHRyaWJ1dGVEaXJlY3RpdmVzLCBTdHJ1Y3R1cmFsRGlyZWN0aXZlc10sXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50XG57XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
