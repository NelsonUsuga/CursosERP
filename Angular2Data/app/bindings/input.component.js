System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.misdatos = { nombre: '', edad: '' };
                    this.completo = false;
                    this.valido = false;
                }
                InputComponent.prototype.onKeyup = function () {
                    this.completo = this.misdatos.nombre != '' && this.misdatos.edad != '';
                    this.valido = this.misdatos.nombre != '' && /^\d+$/.test(this.misdatos.edad);
                    ;
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n    <h2>Tu informaci\u00F3n por favor</h2>\n    \n    <div>\n      <label for=\"nombre\">Tu nombre</label>\n      \n      <input type=\"text\" id=\"nombre\"\n      [(ngModel)]=\"misdatos.nombre\"\n      (keyup)=\"onKeyup()\">\n      \n    </div>\n    \n    <div>\n      <label for=\"edad\">Tu edad</label>\n      \n      <input type=\"text\" id=\"edad\"\n      [(ngModel)]=\"misdatos.edad\"\n      (keyup)=\"onKeyup()\">\n      \n    </div>\n    \n    <br>\n    \n    <div>\n      Completo: {{completo ? 'Si' : 'No'}}\n    </div>\n    \n    <div>\n      Valido: {{valido ? 'Si' : 'No'}}\n    </div>\n    \n    <button [disabled]=\"!valido\">Aceptar</button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVDQTtnQkFBQTtvQkFFRSxhQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztnQkFRakIsQ0FBQztnQkFOQyxnQ0FBTyxHQUFQO29CQUVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFFdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUFDLENBQUM7Z0JBQ2hGLENBQUM7Z0JBaERIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSwycEJBZ0NUO3FCQUNKLENBQUM7O2tDQUFBO2dCQWNGLHFCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCwyQ0FZQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgyPlR1IGluZm9ybWFjacOzbiBwb3IgZmF2b3I8L2gyPlxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgZm9yPVwibm9tYnJlXCI+VHUgbm9tYnJlPC9sYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibm9tYnJlXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJtaXNkYXRvcy5ub21icmVcIlxyXG4gICAgICAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJlZGFkXCI+VHUgZWRhZDwvbGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVkYWRcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cIm1pc2RhdG9zLmVkYWRcIlxyXG4gICAgICAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxicj5cclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgQ29tcGxldG86IHt7Y29tcGxldG8gPyAnU2knIDogJ05vJ319XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgVmFsaWRvOiB7e3ZhbGlkbyA/ICdTaScgOiAnTm8nfX1cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhdmFsaWRvXCI+QWNlcHRhcjwvYnV0dG9uPlxyXG4gICAgYCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudFxyXG57XHJcbiAgbWlzZGF0b3MgPSB7bm9tYnJlOiAnJywgZWRhZDogJyd9O1xyXG4gIGNvbXBsZXRvID0gZmFsc2U7XHJcbiAgdmFsaWRvID0gZmFsc2U7XHJcbiAgXHJcbiAgb25LZXl1cCgpXHJcbiAge1xyXG4gICAgdGhpcy5jb21wbGV0byA9IHRoaXMubWlzZGF0b3Mubm9tYnJlICE9ICcnICYmIHRoaXMubWlzZGF0b3MuZWRhZCAhPSAnJztcclxuICAgIFxyXG4gICAgdGhpcy52YWxpZG8gPSB0aGlzLm1pc2RhdG9zLm5vbWJyZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubWlzZGF0b3MuZWRhZCkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
