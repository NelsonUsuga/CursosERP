System.register(['angular2/core', './attribute-directives.component'], function(exports_1, context_1) {
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
    var core_1, attribute_directives_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <my-attributes-directives></my-attributes-directives>\n    ",
                        directives: [attribute_directives_component_1.AttributeDirectives],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFBQTtnQkFHQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBRVAsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1RUFFVDt3QkFDSixVQUFVLEVBQUUsQ0FBQyxvREFBbUIsQ0FBQztxQkFDakMsQ0FBQzs7Z0NBQUE7Z0JBS0YsbUJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVDQUdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlc30gZnJvbSAnLi9hdHRyaWJ1dGUtZGlyZWN0aXZlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktYXR0cmlidXRlcy1kaXJlY3RpdmVzPjwvbXktYXR0cmlidXRlcy1kaXJlY3RpdmVzPlxuICAgIGAsXG5cdGRpcmVjdGl2ZXM6IFtBdHRyaWJ1dGVEaXJlY3RpdmVzXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnRcbntcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
