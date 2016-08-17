System.register(['angular2/core', './test.component', './juego.component'], function(exports_1, context_1) {
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
    var core_1, test_component_1, juego_component_1;
    var micomponente;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (juego_component_1_1) {
                juego_component_1 = juego_component_1_1;
            }],
        execute: function() {
            micomponente = (function () {
                function micomponente() {
                }
                micomponente.prototype.ngOnInit = function () {
                    this.name = "Nelson Arley Úsuga Moncada";
                };
                micomponente = __decorate([
                    core_1.Component({
                        selector: 'micomponente',
                        template: "Hola, mi <span [style.color]=\"inputElement.value==='si'?'cyan':''\">nombre</span> es {{name}}, soy un teso en <span [class.clase]=\"inputElement.value==='si'\">Angular2</span>\n    <br><br>\n    <input type=\"text\" #inputElement (keyup)=\"0\">\n    <br><br>\n    <button [disabled]=\"inputElement.value!=='si'\">Boton</button>\n    <test></test>\n    <juego></juego>",
                        styleUrls: ['src/css/micomponente.css'],
                        directives: [test_component_1.TestComponent, juego_component_1.Juego]
                    }), 
                    __metadata('design:paramtypes', [])
                ], micomponente);
                return micomponente;
            }());
            exports_1("micomponente", micomponente);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pY29tcG9uZW50ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBUUEsQ0FBQztnQkFKQywrQkFBUSxHQUFSO29CQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLENBQUM7Z0JBQzNDLENBQUM7Z0JBcEJIO29CQUFDLGdCQUFTLENBQ1I7d0JBQ0UsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxrWEFNTTt3QkFDaEIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLEVBQUMsdUJBQUssQ0FBQztxQkFDbEMsQ0FBQzs7Z0NBQUE7Z0JBU0osbUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHVDQVFDLENBQUEiLCJmaWxlIjoibWljb21wb25lbnRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tICcuL3Rlc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtKdWVnb30gZnJvbSAnLi9qdWVnby5jb21wb25lbnQnO1xuXHJcbkBDb21wb25lbnQoXHJcbiAge1xyXG4gICAgc2VsZWN0b3I6ICdtaWNvbXBvbmVudGUnLFxyXG4gICAgdGVtcGxhdGU6IGBIb2xhLCBtaSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3NpJz8nY3lhbic6JydcIj5ub21icmU8L3NwYW4+IGVzIHt7bmFtZX19LCBzb3kgdW4gdGVzbyBlbiA8c3BhbiBbY2xhc3MuY2xhc2VdPVwiaW5wdXRFbGVtZW50LnZhbHVlPT09J3NpJ1wiPkFuZ3VsYXIyPC9zcGFuPlxyXG4gICAgPGJyPjxicj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cclxuICAgIDxicj48YnI+XHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJpbnB1dEVsZW1lbnQudmFsdWUhPT0nc2knXCI+Qm90b248L2J1dHRvbj5cclxuICAgIDx0ZXN0PjwvdGVzdD5cbiAgICA8anVlZ28+PC9qdWVnbz5gLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbWljb21wb25lbnRlLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnQsSnVlZ29dXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIG1pY29tcG9uZW50ZSBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcbiAgbmFtZTpzdHJpbmc7XHJcbiAgXHJcbiAgbmdPbkluaXQoKTphbnlcclxuICB7XHJcbiAgICB0aGlzLm5hbWUgPSBcIk5lbHNvbiBBcmxleSDDmnN1Z2EgTW9uY2FkYVwiO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
