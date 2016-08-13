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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBDQTtnQkFBQTtvQkFFRSxhQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFDZixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFrQyxDQUFDO2dCQWEvRCxDQUFDO2dCQVhDLGdDQUFPLEdBQVA7b0JBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUV2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBRUQsK0JBQU0sR0FBTjtvQkFFRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBekRIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSxvckJBZ0NUO3dCQUVILE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDcEIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNyQixDQUFDOztrQ0FBQTtnQkFvQkYscUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDJDQWtCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5UdSBpbmZvcm1hY2nDs24gcG9yIGZhdm9yPC9oMj5cbiAgICBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cIm5vbWJyZVwiPlR1IG5vbWJyZTwvbGFiZWw+XG4gICAgICBcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibm9tYnJlXCJcbiAgICAgIFsobmdNb2RlbCldPVwibWlzZGF0b3Mubm9tYnJlXCJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwiZWRhZFwiPlR1IGVkYWQ8L2xhYmVsPlxuICAgICAgXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVkYWRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJtaXNkYXRvcy5lZGFkXCJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxicj5cbiAgICBcbiAgICA8ZGl2PlxuICAgICAgQ29tcGxldG86IHt7Y29tcGxldG8gPyAnU2knIDogJ05vJ319XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdj5cbiAgICAgIFbDoWxpZG86IHt7dmFsaWRvID8gJ1NpJyA6ICdObyd9fVxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiF2YWxpZG9cIiAoY2xpY2spPVwiZW52aWFyKClcIj5FbnZpYXI8L2J1dHRvbj5cbiAgICBgLFxuXG4gIGlucHV0czogWydtaXNkYXRvcyddLFxuICBvdXRwdXRzOiBbJ2VudmlhZG8nXVxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50XG57XG4gIG1pc2RhdG9zID0ge25vbWJyZTogJycsIGVkYWQ6ICcnfTtcbiAgY29tcGxldG8gPSBmYWxzZTtcbiAgdmFsaWRvID0gZmFsc2U7XG4gIGVudmlhZG8gPSBuZXcgRXZlbnRFbWl0dGVyPHtub21icmU6IHN0cmluZywgZWRhZDogc3RyaW5nfT4oKTtcblxuICBvbktleXVwKClcbiAge1xuICAgIHRoaXMuY29tcGxldG8gPSB0aGlzLm1pc2RhdG9zLm5vbWJyZSAhPSAnJyAmJiB0aGlzLm1pc2RhdG9zLmVkYWQgIT0gJyc7XG5cbiAgICB0aGlzLnZhbGlkbyA9IHRoaXMubWlzZGF0b3Mubm9tYnJlICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5taXNkYXRvcy5lZGFkKTtcbiAgfVxuXG4gIGVudmlhcigpXG4gIHtcbiAgICB0aGlzLmVudmlhZG8uZW1pdCh0aGlzLm1pc2RhdG9zKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
