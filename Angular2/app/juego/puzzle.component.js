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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.nbrFicha1 = Math.round(Math.random());
                    this.nbrFicha2 = Math.round(Math.random());
                    this.nbrFicha3 = Math.round(Math.random());
                    this.nbrFicha4 = Math.round(Math.random());
                    console.log(this.nbrFicha1, this.nbrFicha2, this.nbrFicha3, this.nbrFicha4);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'mipuzzle',
                        template: "\n    <section class=\"setup\">\n      <h1>Quiero jugar a un juego</h1>\n      <img id=\"imgTitulo\" src=\"./images/saw.gif\"/>\n      <br><br>\n      Escribe tu nombre por favor:\n      <input type=\"text\" #nombre (keyup)=\"0\">\n    </section>\n    \n    <section\n    [ngClass]=\"\n    {\n      puzzle: true,\n      solved: ficha1.value == nbrFicha1 && ficha2.value == nbrFicha2 && ficha3.value == nbrFicha3 && ficha4.value == nbrFicha4\n    }\"\n    [ngStyle]=\"{display: nombre.value === '' ? 'none' : 'block'}\"\n    >\n      <h2>Juego {{ficha1.value == nbrFicha1 && ficha2.value == nbrFicha2 && ficha3.value == nbrFicha3 && ficha4.value == nbrFicha4 ? 'ganado' : 'perdido'}}</h2>\n      <p>Bienvenido {{nombre.value}}, que comience el juego\n      <br>\n      Instrucciones: adivina la convinaci\u00F3n entre d\u00EDgitos de 1 y 0.\n      </p>\n      Ficha 1: <input type=\"text\" #ficha1 (keyup)=\"0\"><br>\n      Ficha 2: <input type=\"text\" #ficha2 (keyup)=\"0\"><br>\n      Ficha 3: <input type=\"text\" #ficha3 (keyup)=\"0\"><br>\n      Ficha 4: <input type=\"text\" #ficha4 (keyup)=\"0\"><br>\n    </section>\n    <h2 [hidden]=\"ficha1.value != nbrFicha1 || ficha2.value != nbrFicha2 || ficha3.value != nbrFicha3 || ficha4.value != nbrFicha4\">Felicitaciones {{nombre.value}}, has ganado</h2>\n    ",
                        styleUrls: ['./src/css/juego.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1ZWdvL3B1enpsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBVEMsa0NBQVEsR0FBUjtvQkFFRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUM3RSxDQUFDO2dCQWxESDtvQkFBQyxnQkFBUyxDQUNSO3dCQUNFLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsbXlDQTRCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDbkMsQ0FBQzs7bUNBQUE7Z0JBa0JKLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJqdWVnby9wdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cclxuQENvbXBvbmVudChcclxuICB7XHJcbiAgICBzZWxlY3RvcjogJ21pcHV6emxlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICA8aDE+UXVpZXJvIGp1Z2FyIGEgdW4ganVlZ288L2gxPlxuICAgICAgPGltZyBpZD1cImltZ1RpdHVsb1wiIHNyYz1cIi4vaW1hZ2VzL3Nhdy5naWZcIi8+XG4gICAgICA8YnI+PGJyPlxyXG4gICAgICBFc2NyaWJlIHR1IG5vbWJyZSBwb3IgZmF2b3I6XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNub21icmUgKGtleXVwKT1cIjBcIj5cclxuICAgIDwvc2VjdGlvbj5cbiAgICBcclxuICAgIDxzZWN0aW9uXG4gICAgW25nQ2xhc3NdPVwiXG4gICAge1xuICAgICAgcHV6emxlOiB0cnVlLFxuICAgICAgc29sdmVkOiBmaWNoYTEudmFsdWUgPT0gbmJyRmljaGExICYmIGZpY2hhMi52YWx1ZSA9PSBuYnJGaWNoYTIgJiYgZmljaGEzLnZhbHVlID09IG5ickZpY2hhMyAmJiBmaWNoYTQudmFsdWUgPT0gbmJyRmljaGE0XG4gICAgfVwiXG4gICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5vbWJyZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiXG4gICAgPlxyXG4gICAgICA8aDI+SnVlZ28ge3tmaWNoYTEudmFsdWUgPT0gbmJyRmljaGExICYmIGZpY2hhMi52YWx1ZSA9PSBuYnJGaWNoYTIgJiYgZmljaGEzLnZhbHVlID09IG5ickZpY2hhMyAmJiBmaWNoYTQudmFsdWUgPT0gbmJyRmljaGE0ID8gJ2dhbmFkbycgOiAncGVyZGlkbyd9fTwvaDI+XHJcbiAgICAgIDxwPkJpZW52ZW5pZG8ge3tub21icmUudmFsdWV9fSwgcXVlIGNvbWllbmNlIGVsIGp1ZWdvXG4gICAgICA8YnI+XG4gICAgICBJbnN0cnVjY2lvbmVzOiBhZGl2aW5hIGxhIGNvbnZpbmFjacOzbiBlbnRyZSBkw61naXRvcyBkZSAxIHkgMC5cbiAgICAgIDwvcD5cclxuICAgICAgRmljaGEgMTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpY2hhMSAoa2V5dXApPVwiMFwiPjxicj5cclxuICAgICAgRmljaGEgMjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpY2hhMiAoa2V5dXApPVwiMFwiPjxicj5cclxuICAgICAgRmljaGEgMzogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpY2hhMyAoa2V5dXApPVwiMFwiPjxicj5cclxuICAgICAgRmljaGEgNDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpY2hhNCAoa2V5dXApPVwiMFwiPjxicj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxoMiBbaGlkZGVuXT1cImZpY2hhMS52YWx1ZSAhPSBuYnJGaWNoYTEgfHwgZmljaGEyLnZhbHVlICE9IG5ickZpY2hhMiB8fCBmaWNoYTMudmFsdWUgIT0gbmJyRmljaGEzIHx8IGZpY2hhNC52YWx1ZSAhPSBuYnJGaWNoYTRcIj5GZWxpY2l0YWNpb25lcyB7e25vbWJyZS52YWx1ZX19LCBoYXMgZ2FuYWRvPC9oMj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zcmMvY3NzL2p1ZWdvLmNzcyddLFxyXG4gIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50XHJcbntcclxuICBuYnJGaWNoYTE6IG51bWJlcjtcbiAgbmJyRmljaGEyOiBudW1iZXI7XG4gIG5ickZpY2hhMzogbnVtYmVyO1xuICBuYnJGaWNoYTQ6IG51bWJlcjtcbiAgXG4gIG5nT25Jbml0KClcbiAge1xuICAgIHRoaXMubmJyRmljaGExID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLm5ickZpY2hhMiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgdGhpcy5uYnJGaWNoYTMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMubmJyRmljaGE0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5ickZpY2hhMSwgdGhpcy5uYnJGaWNoYTIsIHRoaXMubmJyRmljaGEzLCB0aGlzLm5ickZpY2hhNClcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
