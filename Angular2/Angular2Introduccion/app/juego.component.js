System.register(['angular2/core', './juego/puzzle.component'], function(exports_1, context_1) {
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
    var core_1, puzzle_component_1;
    var Juego;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_component_1_1) {
                puzzle_component_1 = puzzle_component_1_1;
            }],
        execute: function() {
            Juego = (function () {
                function Juego() {
                }
                Juego = __decorate([
                    core_1.Component({
                        selector: 'juego',
                        template: '<mipuzzle></mipuzzle>',
                        directives: [puzzle_component_1.PuzzleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Juego);
                return Juego;
            }());
            exports_1("Juego", Juego);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1ZWdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQUdBLENBQUM7Z0JBVkQ7b0JBQUMsZ0JBQVMsQ0FDUjt3QkFDRSxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFDLHVCQUF1Qjt3QkFDaEMsVUFBVSxFQUFDLENBQUMsa0NBQWUsQ0FBQztxQkFDN0IsQ0FBQzs7eUJBQUE7Z0JBS0osWUFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQseUJBR0MsQ0FBQSIsImZpbGUiOiJqdWVnby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UHV6emxlQ29tcG9uZW50fSBmcm9tICcuL2p1ZWdvL3B1enpsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudChcclxuICB7XHJcbiAgICBzZWxlY3RvcjogJ2p1ZWdvJyxcclxuICAgIHRlbXBsYXRlOic8bWlwdXp6bGU+PC9taXB1enpsZT4nLFxyXG4gICAgZGlyZWN0aXZlczpbUHV6emxlQ29tcG9uZW50XVxyXG4gIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgSnVlZ29cclxue1xyXG4gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
