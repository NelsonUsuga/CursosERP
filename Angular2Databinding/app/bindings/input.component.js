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
                    this.enviado = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    this.completo = this.misdatos.nombre != '' && this.misdatos.edad != '';
                    this.valido = this.misdatos.nombre != '' && /^\d+$/.test(this.misdatos.edad);
                };
                InputComponent.prototype.enviar = function () {
                    this.enviado.emit(this.misdatos);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n    <h2>Tu informaci\u00F3n por favor</h2>\n    \n    <div>\n      <label for=\"nombre\">Tu nombre</label>\n      \n      <input type=\"text\" id=\"nombre\"\n      [(ngModel)]=\"misdatos.nombre\"\n      (keyup)=\"onKeyup()\">\n      \n    </div>\n    \n    <div>\n      <label for=\"edad\">Tu edad</label>\n      \n      <input type=\"text\" id=\"edad\"\n      [(ngModel)]=\"misdatos.edad\"\n      (keyup)=\"onKeyup()\">\n      \n    </div>\n    \n    <br>\n    \n    <div>\n      Completo: {{completo ? 'Si' : 'No'}}\n    </div>\n    \n    <div>\n      V\u00E1lido: {{valido ? 'Si' : 'No'}}\n    </div>\n    \n    <button [disabled]=\"!valido\" (click)=\"enviar()\">Enviar</button>\n    ",
                        inputs: ['misdatos'],
                        outputs: ['enviado']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBDQTtnQkFBQTtvQkFFRSxhQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFDZixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFrQyxDQUFDO2dCQWEvRCxDQUFDO2dCQVhDLGdDQUFPLEdBQVA7b0JBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUV2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBRUQsK0JBQU0sR0FBTjtvQkFFRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBekRIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSxvckJBZ0NUO3dCQUVILE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDcEIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNyQixDQUFDOztrQ0FBQTtnQkFvQkYscUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDJDQWtCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aDI+VHUgaW5mb3JtYWNpw7NuIHBvciBmYXZvcjwvaDI+XHJcbiAgICBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJub21icmVcIj5UdSBub21icmU8L2xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJub21icmVcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cIm1pc2RhdG9zLm5vbWJyZVwiXHJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGZvcj1cImVkYWRcIj5UdSBlZGFkPC9sYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZWRhZFwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwibWlzZGF0b3MuZWRhZFwiXHJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGJyPlxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICBDb21wbGV0bzoge3tjb21wbGV0byA/ICdTaScgOiAnTm8nfX1cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICBWw6FsaWRvOiB7e3ZhbGlkbyA/ICdTaScgOiAnTm8nfX1cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhdmFsaWRvXCIgKGNsaWNrKT1cImVudmlhcigpXCI+RW52aWFyPC9idXR0b24+XHJcbiAgICBgLFxyXG5cclxuICBpbnB1dHM6IFsnbWlzZGF0b3MnXSxcclxuICBvdXRwdXRzOiBbJ2VudmlhZG8nXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50XHJcbntcclxuICBtaXNkYXRvcyA9IHtub21icmU6ICcnLCBlZGFkOiAnJ307XHJcbiAgY29tcGxldG8gPSBmYWxzZTtcclxuICB2YWxpZG8gPSBmYWxzZTtcclxuICBlbnZpYWRvID0gbmV3IEV2ZW50RW1pdHRlcjx7bm9tYnJlOiBzdHJpbmcsIGVkYWQ6IHN0cmluZ30+KCk7XHJcblxyXG4gIG9uS2V5dXAoKVxyXG4gIHtcclxuICAgIHRoaXMuY29tcGxldG8gPSB0aGlzLm1pc2RhdG9zLm5vbWJyZSAhPSAnJyAmJiB0aGlzLm1pc2RhdG9zLmVkYWQgIT0gJyc7XHJcblxyXG4gICAgdGhpcy52YWxpZG8gPSB0aGlzLm1pc2RhdG9zLm5vbWJyZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubWlzZGF0b3MuZWRhZCk7XHJcbiAgfVxyXG5cclxuICBlbnZpYXIoKVxyXG4gIHtcclxuICAgIHRoaXMuZW52aWFkby5lbWl0KHRoaXMubWlzZGF0b3MpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
