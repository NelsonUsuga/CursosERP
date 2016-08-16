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
                HighlightDirective.prototype.ngOnInit = function () {
                    //this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor);
                    this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFJQyw0QkFBb0IsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUYzRCxrQkFBYSxHQUFXLE9BQU8sQ0FBQztnQkFFNkIsQ0FBQztnQkFHdEUscUNBQVEsR0FBUjtvQkFFQyxzRkFBc0Y7b0JBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdEUsQ0FBQztnQkFqQkY7b0JBQUMsZ0JBQVMsQ0FDVDt3QkFDQyxRQUFRLEVBQUUsZUFBZTtxQkFDekIsQ0FDRDs7c0NBQUE7Z0JBY0QseUJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELG1EQVlDLENBQUE7Ozs7QUFFRDs7Ozs7Ozs7R0FRRyIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVzYXJyb2xsYWRvciAyIG9uIDE2LzA4LzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmXCI7XHJcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpXCI7XHJcblxyXG5ARGlyZWN0aXZlKFxyXG5cdHtcclxuXHRcdHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XSdcclxuXHR9XHJcbilcclxuXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXRcclxue1xyXG5cdHByaXZhdGUgX2RlZmF1bHRDb2xvcjogc3RyaW5nID0gJ2dyZWVuJztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcil7fVxyXG5cclxuXHJcblx0bmdPbkluaXQoKTphbnlcclxuXHR7XHJcblx0XHQvL3RoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFJlZiwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xyXG5cdFx0dGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9kZWZhdWx0Q29sb3I7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5FcnJvcmVzIGVuIGVsIHZpZGVvXHJcblxyXG4xLiBlbiBsYSB2YXJpYWJsZSBkZSBfZGVmYXVsdGNvbG9yXHJcbiBwcml2YXRlIF9kZWZhdWx0Q29sb3I6ICdncmVlbic7Ly9tYWxvXHJcbiBwcml2YXRlIF9kZWZhdWx0Q29sb3I6IHN0cmluZyA9ICdncmVlbic7Ly9idWVub1xyXG5cclxuMi4gY29uIHNldEVsZW1lbnRTdHlsZSBubyByZWNvbm9jZSBlbCBub21icmUgZGUgbGFzIHByb3BpZWRhZGVzKHNlZ3VuZG8gcGFyw6FtZXRybykgY29tbyBiYWNrZ3JvdW5kLWNvbG9yXHJcbiAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
