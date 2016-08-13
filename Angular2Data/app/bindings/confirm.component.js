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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0RBO2dCQUFBO29CQUNFLGFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUNsQyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNmLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQWtDLENBQUM7Z0JBYWxFLENBQUM7Z0JBWEMsa0NBQU8sR0FBUDtvQkFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBRXZFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkFFRCxvQ0FBUyxHQUFUO29CQUVFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkEzREg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHM1QkFrQ1A7d0JBRUgsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNwQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCLENBQUM7O29DQUFBO2dCQW1CRix1QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsK0NBaUJDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuXHQqIENyZWF0ZWQgYnkgRGVzYXJyb2xsYWRvciAyIG9uIDEyLzA4LzIwMTYuXHJcblx0Ki9cclxuaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHJcbiAgc2VsZWN0b3I6ICdteS1jb25maXJtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxoMj5UdSBpbmZvcm1hY2nDs24gYSBlbnZpYXIgZXMgY29ycmVjdGE/PC9oMj5cclxuICBcclxuICA8cD5UdSBub21icmUgZXMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e21pc2RhdG9zLm5vbWJyZX19PC9zcGFuPiB5IHR1IGVkYWQgZXMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57e21pc2RhdG9zLmVkYWR9fTwvc3Bhbj4gYcOxb3MsIHBvciBmYXZvciBjbGljayBlbiAnQ29uZmlybWFyJyBwYXJhIGNhbWJpYXIgdHUgaW5mb3JtYWNpw7NuPC9wPlxyXG4gIFxyXG4gIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJub21icmVcIj5UdSBub21icmU8L2xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJub21icmVcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cIm1pc2RhdG9zLm5vbWJyZVwiXHJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGZvcj1cImVkYWRcIj5UdSBlZGFkPC9sYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZWRhZFwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwibWlzZGF0b3MuZWRhZFwiXHJcbiAgICAgIChrZXl1cCk9XCJvbktleXVwKClcIj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGJyPlxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICBDb21wbGV0bzoge3tjb21wbGV0byA/ICdTaScgOiAnTm8nfX1cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICBWYWxpZG86IHt7dmFsaWRvID8gJ1NpJyA6ICdObyd9fVxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiF2YWxpZG9cIiAoY2xpY2spPVwiY29uZmlybWFyKClcIj5Db25maXJtYXI8L2J1dHRvbj5cclxuICAgIGAsXHJcblxyXG4gIGlucHV0czogWydtaXNkYXRvcyddLFxyXG4gIG91dHB1dHM6IFsnY29uZmlybWFkbyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudCB7XHJcbiAgbWlzZGF0b3MgPSB7bm9tYnJlOiAnJywgZWRhZDogJyd9O1xyXG4gIGNvbXBsZXRvID0gZmFsc2U7XHJcbiAgdmFsaWRvID0gZmFsc2U7XHJcbiAgY29uZmlybWFkbyA9IG5ldyBFdmVudEVtaXR0ZXI8e25vbWJyZTogc3RyaW5nLCBlZGFkOiBzdHJpbmd9PigpO1xyXG5cclxuICBvbktleXVwKClcclxuICB7XHJcbiAgICB0aGlzLmNvbXBsZXRvID0gdGhpcy5taXNkYXRvcy5ub21icmUgIT0gJycgJiYgdGhpcy5taXNkYXRvcy5lZGFkICE9ICcnO1xyXG5cclxuICAgIHRoaXMudmFsaWRvID0gdGhpcy5taXNkYXRvcy5ub21icmUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm1pc2RhdG9zLmVkYWQpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybWFyKClcclxuICB7XHJcbiAgICB0aGlzLmNvbmZpcm1hZG8uZW1pdCh0aGlzLm1pc2RhdG9zKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
