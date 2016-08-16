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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBQQVFUO3dCQUNKLFVBQVUsRUFBRSxDQUFDLG9EQUFtQixFQUFFLDJDQUFvQixDQUFDO3FCQUN2RCxDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUNBR0MsQ0FBQSIsImZpbGUiOiJkZXYvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlc30gZnJvbSAnLi9hdHRyaWJ1dGUtZGlyZWN0aXZlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc30gZnJvbSBcIi4uL2FwcC9TdHJ1Y3R1cmFsRGlyZWN0aXZlc1wiO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDxoMT5EaXJlY3RpdmVzPC9oMT5cblx0XHRcblx0XHQ8aDI+QXR0cmlidXRlIGRpcmVjdGl2ZXM8L2gyPlxuICAgICAgICA8bXktYXR0cmlidXRlcy1kaXJlY3RpdmVzPjwvbXktYXR0cmlidXRlcy1kaXJlY3RpdmVzPlxuICAgICAgICBcbiAgICAgICAgPGgyPlN0cnVjdHVyYWwgZGlyZWN0aXZlczwvaDI+XG4gICAgICAgIDxteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXM+PC9teS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXM+XG4gICAgYCxcblx0ZGlyZWN0aXZlczogW0F0dHJpYnV0ZURpcmVjdGl2ZXMsIFN0cnVjdHVyYWxEaXJlY3RpdmVzXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnRcbntcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
