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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.misdatos = { nombre: '', edad: '' };
                    this.completo = false;
                    this.valido = false;
                    this.confirmado = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
                    this.completo = this.misdatos.nombre != '' && this.misdatos.edad != '';
                    this.valido = this.misdatos.nombre != '' && /^\d+$/.test(this.misdatos.edad);
                };
                ConfirmComponent.prototype.confirmar = function () {
                    this.confirmado.emit(this.misdatos);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n  <h2>Tu informaci\u00F3n a enviar es correcta?</h2>\n  \n  <p>Tu nombre es <span class=\"highlight\">{{misdatos.nombre}}</span> y tu edad es <span class=\"highlight\">{{misdatos.edad}}</span> a\u00F1os, por favor click en 'Confirmar' para cambiar tu informaci\u00F3n</p>\n  \n  <div>\n      <label for=\"nombre\">Tu nombre</label>\n      \n      <input type=\"text\" id=\"nombre\"\n      [(ngModel)]=\"misdatos.nombre\"\n      (keyup)=\"onKeyup()\">\n      \n    </div>\n    \n    <div>\n      <label for=\"edad\">Tu edad</label>\n      \n      <input type=\"text\" id=\"edad\"\n      [(ngModel)]=\"misdatos.edad\"\n      (keyup)=\"onKeyup()\">\n      \n    </div>\n    \n    <br>\n    \n    <div>\n      Completo: {{completo ? 'Si' : 'No'}}\n    </div>\n    \n    <div>\n      Valido: {{valido ? 'Si' : 'No'}}\n    </div>\n    \n    <button [disabled]=\"!valido\" (click)=\"confirmar()\">Confirmar</button>\n    ",
                        inputs: ['misdatos'],
                        outputs: ['confirmado']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0RBO2dCQUFBO29CQUNFLGFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNsQyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNmLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQWtDLENBQUM7Z0JBYWxFLENBQUM7Z0JBWEMsa0NBQU8sR0FBUDtvQkFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBRXZFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkFFRCxvQ0FBUyxHQUFUO29CQUVFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkEzREg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHM1QkFrQ1A7d0JBRUgsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNwQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCLENBQUM7O29DQUFBO2dCQW1CRix1QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsK0NBaUJDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcblx0KiBDcmVhdGVkIGJ5IERlc2Fycm9sbGFkb3IgMiBvbiAxMi8wOC8yMDE2LlxuXHQqL1xuaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXG4gIHNlbGVjdG9yOiAnbXktY29uZmlybScsXG4gIHRlbXBsYXRlOiBgXG4gIDxoMj5UdSBpbmZvcm1hY2nDs24gYSBlbnZpYXIgZXMgY29ycmVjdGE/PC9oMj5cbiAgXG4gIDxwPlR1IG5vbWJyZSBlcyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bWlzZGF0b3Mubm9tYnJlfX08L3NwYW4+IHkgdHUgZWRhZCBlcyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bWlzZGF0b3MuZWRhZH19PC9zcGFuPiBhw7FvcywgcG9yIGZhdm9yIGNsaWNrIGVuICdDb25maXJtYXInIHBhcmEgY2FtYmlhciB0dSBpbmZvcm1hY2nDs248L3A+XG4gIFxuICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cIm5vbWJyZVwiPlR1IG5vbWJyZTwvbGFiZWw+XG4gICAgICBcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibm9tYnJlXCJcbiAgICAgIFsobmdNb2RlbCldPVwibWlzZGF0b3Mubm9tYnJlXCJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwiZWRhZFwiPlR1IGVkYWQ8L2xhYmVsPlxuICAgICAgXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVkYWRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJtaXNkYXRvcy5lZGFkXCJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxicj5cbiAgICBcbiAgICA8ZGl2PlxuICAgICAgQ29tcGxldG86IHt7Y29tcGxldG8gPyAnU2knIDogJ05vJ319XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdj5cbiAgICAgIFZhbGlkbzoge3t2YWxpZG8gPyAnU2knIDogJ05vJ319XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIXZhbGlkb1wiIChjbGljayk9XCJjb25maXJtYXIoKVwiPkNvbmZpcm1hcjwvYnV0dG9uPlxuICAgIGAsXG5cbiAgaW5wdXRzOiBbJ21pc2RhdG9zJ10sXG4gIG91dHB1dHM6IFsnY29uZmlybWFkbyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudCB7XG4gIG1pc2RhdG9zID0ge25vbWJyZTogJycsIGVkYWQ6ICcnfTtcbiAgY29tcGxldG8gPSBmYWxzZTtcbiAgdmFsaWRvID0gZmFsc2U7XG4gIGNvbmZpcm1hZG8gPSBuZXcgRXZlbnRFbWl0dGVyPHtub21icmU6IHN0cmluZywgZWRhZDogc3RyaW5nfT4oKTtcblxuICBvbktleXVwKClcbiAge1xuICAgIHRoaXMuY29tcGxldG8gPSB0aGlzLm1pc2RhdG9zLm5vbWJyZSAhPSAnJyAmJiB0aGlzLm1pc2RhdG9zLmVkYWQgIT0gJyc7XG5cbiAgICB0aGlzLnZhbGlkbyA9IHRoaXMubWlzZGF0b3Mubm9tYnJlICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5taXNkYXRvcy5lZGFkKTtcbiAgfVxuXG4gIGNvbmZpcm1hcigpXG4gIHtcbiAgICB0aGlzLmNvbmZpcm1hZG8uZW1pdCh0aGlzLm1pc2RhdG9zKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
