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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBS0MsNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFIM0Qsa0JBQWEsR0FBVyxPQUFPLENBQUM7Z0JBRzZCLENBQUM7Z0JBR3RFOzs7O21CQUlHO2dCQUVILHlDQUFZLEdBQVo7b0JBRUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFFRCx5Q0FBWSxHQUFaO29CQUVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQVk7b0JBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxDQUFDO2dCQXhDRjtvQkFBQyxnQkFBUyxDQUNUO3dCQUNDLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzt3QkFDdEMsSUFBSSxFQUNKOzRCQUNDLGNBQWMsRUFBQyxnQkFBZ0I7NEJBQy9CLGNBQWMsRUFBQyxnQkFBZ0I7eUJBQy9CO3FCQUNELENBQ0Q7O3NDQUFBO2dCQWlDRCx5QkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsbURBOEJDLENBQUE7Ozs7QUFFRDs7Ozs7Ozs7R0FRRyIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVzYXJyb2xsYWRvciAyIG9uIDE2LzA4LzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmXCI7XHJcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpXCI7XHJcblxyXG5ARGlyZWN0aXZlKFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXHJcblx0XHRpbnB1dHM6IFsnaGlnaGxpZ2h0Q29sb3I6bXlIaWdobGlnaHQnXSxcclxuXHRcdGhvc3Q6XHJcblx0XHR7XHJcblx0XHRcdCcobW91c2VlbnRlciknOidvbk1vdXNlRW50ZXIoKScsXHJcblx0XHRcdCcobW91c2VsZWF2ZSknOidvbk1vdXNlTGVhdmUoKSdcclxuXHRcdH1cclxuXHR9XHJcbilcclxuXHJcbi8vZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdFxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlXHJcbntcclxuXHRwcml2YXRlIF9kZWZhdWx0Q29sb3I6IHN0cmluZyA9ICdncmVlbic7XHJcblx0aGlnaGxpZ2h0Q29sb3I6c3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKXt9XHJcblxyXG5cclxuXHQvKm5nT25Jbml0KCk6YW55XHJcblx0e1xyXG5cdFx0Ly90aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5fZGVmYXVsdENvbG9yKTtcclxuXHRcdHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3I7XHJcblx0fSovXHJcblxyXG5cdG9uTW91c2VFbnRlcigpXHJcblx0e1xyXG5cdFx0dGhpcy5oaWdobGlnaHQodGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xyXG5cdH1cclxuXHJcblx0b25Nb3VzZUxlYXZlKClcclxuXHR7XHJcblx0XHR0aGlzLmhpZ2hsaWdodChudWxsKTtcclxuXHR9XHJcblxyXG5cdGhpZ2hsaWdodChjb2xvcjpzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuLypcclxuRXJyb3JlcyBlbiBlbCB2aWRlb1xyXG5cclxuMS4gZW4gbGEgdmFyaWFibGUgZGUgX2RlZmF1bHRjb2xvclxyXG4gcHJpdmF0ZSBfZGVmYXVsdENvbG9yOiAnZ3JlZW4nOy8vbWFsb1xyXG4gcHJpdmF0ZSBfZGVmYXVsdENvbG9yOiBzdHJpbmcgPSAnZ3JlZW4nOy8vYnVlbm9cclxuXHJcbjIuIGNvbiBzZXRFbGVtZW50U3R5bGUgbm8gcmVjb25vY2UgZWwgbm9tYnJlIGRlIGxhcyBwcm9waWVkYWRlcyhzZWd1bmRvIHBhcsOhbWV0cm8pIGNvbW8gYmFja2dyb3VuZC1jb2xvclxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
