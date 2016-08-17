System.register(['angular2/core', "angular2/src/core/linker/element_ref", "angular2/src/core/render/api"], function(exports_1, context_1) {
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
    var core_1, element_ref_1, api_1;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (element_ref_1_1) {
                element_ref_1 = element_ref_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                /*ngOnInit():any
                {
                    //this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor);
                    this._elRef.nativeElement.style.backgroundColor = this.highlightColor || this._defaultColor;
                }*/
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective.prototype.highlight = function (color) {
                    this._elRef.nativeElement.style.backgroundColor = color;
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor:myHighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [element_ref_1.ElementRef, api_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
/*
Errores en el video

1. en la variable de _defaultcolor
 private _defaultColor: 'green';//malo
 private _defaultColor: string = 'green';//bueno

2. con setElementStyle no reconoce el nombre de las propiedades(segundo parámetro) como background-color
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBS0MsNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFIM0Qsa0JBQWEsR0FBVyxPQUFPLENBQUM7Z0JBRzZCLENBQUM7Z0JBR3RFOzs7O21CQUlHO2dCQUVILHlDQUFZLEdBQVo7b0JBRUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFFRCx5Q0FBWSxHQUFaO29CQUVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQVk7b0JBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxDQUFDO2dCQXhDRjtvQkFBQyxnQkFBUyxDQUNUO3dCQUNDLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzt3QkFDdEMsSUFBSSxFQUNKOzRCQUNDLGNBQWMsRUFBQyxnQkFBZ0I7NEJBQy9CLGNBQWMsRUFBQyxnQkFBZ0I7eUJBQy9CO3FCQUNELENBQ0Q7O3NDQUFBO2dCQWlDRCx5QkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsbURBOEJDLENBQUE7Ozs7QUFFRDs7Ozs7Ozs7R0FRRyIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IERlc2Fycm9sbGFkb3IgMiBvbiAxNi8wOC8yMDE2LlxuICovXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzXCI7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWZcIjtcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpXCI7XG5cbkBEaXJlY3RpdmUoXG5cdHtcblx0XHRzZWxlY3RvcjogJ1tteUhpZ2hsaWdodF0nLFxuXHRcdGlucHV0czogWydoaWdobGlnaHRDb2xvcjpteUhpZ2hsaWdodCddLFxuXHRcdGhvc3Q6XG5cdFx0e1xuXHRcdFx0Jyhtb3VzZWVudGVyKSc6J29uTW91c2VFbnRlcigpJyxcblx0XHRcdCcobW91c2VsZWF2ZSknOidvbk1vdXNlTGVhdmUoKSdcblx0XHR9XG5cdH1cbilcblxuLy9leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0XG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlXG57XG5cdHByaXZhdGUgX2RlZmF1bHRDb2xvcjogc3RyaW5nID0gJ2dyZWVuJztcblx0aGlnaGxpZ2h0Q29sb3I6c3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpe31cblxuXG5cdC8qbmdPbkluaXQoKTphbnlcblx0e1xuXHRcdC8vdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuX2RlZmF1bHRDb2xvcik7XG5cdFx0dGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcjtcblx0fSovXG5cblx0b25Nb3VzZUVudGVyKClcblx0e1xuXHRcdHRoaXMuaGlnaGxpZ2h0KHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcblx0fVxuXG5cdG9uTW91c2VMZWF2ZSgpXG5cdHtcblx0XHR0aGlzLmhpZ2hsaWdodChudWxsKTtcblx0fVxuXG5cdGhpZ2hsaWdodChjb2xvcjpzdHJpbmcpXG5cdHtcblx0XHR0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXHR9XG5cblxufVxuXG4vKlxuRXJyb3JlcyBlbiBlbCB2aWRlb1xuXG4xLiBlbiBsYSB2YXJpYWJsZSBkZSBfZGVmYXVsdGNvbG9yXG4gcHJpdmF0ZSBfZGVmYXVsdENvbG9yOiAnZ3JlZW4nOy8vbWFsb1xuIHByaXZhdGUgX2RlZmF1bHRDb2xvcjogc3RyaW5nID0gJ2dyZWVuJzsvL2J1ZW5vXG5cbjIuIGNvbiBzZXRFbGVtZW50U3R5bGUgbm8gcmVjb25vY2UgZWwgbm9tYnJlIGRlIGxhcyBwcm9waWVkYWRlcyhzZWd1bmRvIHBhcsOhbWV0cm8pIGNvbW8gYmFja2dyb3VuZC1jb2xvclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
