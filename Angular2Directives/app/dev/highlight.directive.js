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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBS0MsNEJBQW9CLE1BQWtCLEVBQVUsU0FBbUI7b0JBQS9DLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtvQkFIM0Qsa0JBQWEsR0FBVyxPQUFPLENBQUM7Z0JBRzZCLENBQUM7Z0JBR3RFOzs7O21CQUlHO2dCQUVILHlDQUFZLEdBQVo7b0JBRUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFFRCx5Q0FBWSxHQUFaO29CQUVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQVk7b0JBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxDQUFDO2dCQXhDRjtvQkFBQyxnQkFBUyxDQUNUO3dCQUNDLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzt3QkFDdEMsSUFBSSxFQUNKOzRCQUNDLGNBQWMsRUFBQyxnQkFBZ0I7NEJBQy9CLGNBQWMsRUFBQyxnQkFBZ0I7eUJBQy9CO3FCQUNELENBQ0Q7O3NDQUFBO2dCQWlDRCx5QkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsbURBOEJDLENBQUE7Ozs7QUFFRDs7Ozs7Ozs7R0FRRyIsImZpbGUiOiJkZXYvaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IERlc2Fycm9sbGFkb3IgMiBvbiAxNi8wOC8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X3JlZlwiO1xyXG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaVwiO1xyXG5cclxuQERpcmVjdGl2ZShcclxuXHR7XHJcblx0XHRzZWxlY3RvcjogJ1tteUhpZ2hsaWdodF0nLFxyXG5cdFx0aW5wdXRzOiBbJ2hpZ2hsaWdodENvbG9yOm15SGlnaGxpZ2h0J10sXHJcblx0XHRob3N0OlxyXG5cdFx0e1xyXG5cdFx0XHQnKG1vdXNlZW50ZXIpJzonb25Nb3VzZUVudGVyKCknLFxyXG5cdFx0XHQnKG1vdXNlbGVhdmUpJzonb25Nb3VzZUxlYXZlKCknXHJcblx0XHR9XHJcblx0fVxyXG4pXHJcblxyXG4vL2V4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXRcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZVxyXG57XHJcblx0cHJpdmF0ZSBfZGVmYXVsdENvbG9yOiBzdHJpbmcgPSAnZ3JlZW4nO1xyXG5cdGhpZ2hsaWdodENvbG9yOnN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcil7fVxyXG5cclxuXHJcblx0LypuZ09uSW5pdCgpOmFueVxyXG5cdHtcclxuXHRcdC8vdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuX2RlZmF1bHRDb2xvcik7XHJcblx0XHR0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yO1xyXG5cdH0qL1xyXG5cclxuXHRvbk1vdXNlRW50ZXIoKVxyXG5cdHtcclxuXHRcdHRoaXMuaGlnaGxpZ2h0KHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VMZWF2ZSgpXHJcblx0e1xyXG5cdFx0dGhpcy5oaWdobGlnaHQobnVsbCk7XHJcblx0fVxyXG5cclxuXHRoaWdobGlnaHQoY29sb3I6c3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbi8qXHJcbkVycm9yZXMgZW4gZWwgdmlkZW9cclxuXHJcbjEuIGVuIGxhIHZhcmlhYmxlIGRlIF9kZWZhdWx0Y29sb3JcclxuIHByaXZhdGUgX2RlZmF1bHRDb2xvcjogJ2dyZWVuJzsvL21hbG9cclxuIHByaXZhdGUgX2RlZmF1bHRDb2xvcjogc3RyaW5nID0gJ2dyZWVuJzsvL2J1ZW5vXHJcblxyXG4yLiBjb24gc2V0RWxlbWVudFN0eWxlIG5vIHJlY29ub2NlIGVsIG5vbWJyZSBkZSBsYXMgcHJvcGllZGFkZXMoc2VndW5kbyBwYXLDoW1ldHJvKSBjb21vIGJhY2tncm91bmQtY29sb3JcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
