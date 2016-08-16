System.register(['angular2/core', './attribute-directives.component', "../app/StructuralDirectives"], function(exports_1, context_1) {
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
    var core_1, attribute_directives_component_1, StructuralDirectives_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (StructuralDirectives_1_1) {
                StructuralDirectives_1 = StructuralDirectives_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>Directives</h1>\n\t\t\n\t\t<h2>Attribute directives</h2>\n        <my-attributes-directives></my-attributes-directives>\n        \n        <h2>Structural directives</h2>\n        <my-structural-directives></my-structural-directives>\n    ",
                        directives: [attribute_directives_component_1.AttributeDirectives, StructuralDirectives_1.StructuralDirectives],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBQQVFUO3dCQUNKLFVBQVUsRUFBRSxDQUFDLG9EQUFtQixFQUFFLDJDQUFvQixDQUFDO3FCQUN2RCxDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUNBR0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVzfSBmcm9tICcuL2F0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0cnVjdHVyYWxEaXJlY3RpdmVzfSBmcm9tIFwiLi4vYXBwL1N0cnVjdHVyYWxEaXJlY3RpdmVzXCI7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGgxPkRpcmVjdGl2ZXM8L2gxPlxuXHRcdFxuXHRcdDxoMj5BdHRyaWJ1dGUgZGlyZWN0aXZlczwvaDI+XG4gICAgICAgIDxteS1hdHRyaWJ1dGVzLWRpcmVjdGl2ZXM+PC9teS1hdHRyaWJ1dGVzLWRpcmVjdGl2ZXM+XG4gICAgICAgIFxuICAgICAgICA8aDI+U3RydWN0dXJhbCBkaXJlY3RpdmVzPC9oMj5cbiAgICAgICAgPG15LXN0cnVjdHVyYWwtZGlyZWN0aXZlcz48L215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcz5cbiAgICBgLFxuXHRkaXJlY3RpdmVzOiBbQXR0cmlidXRlRGlyZWN0aXZlcywgU3RydWN0dXJhbERpcmVjdGl2ZXNdLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudFxue1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
