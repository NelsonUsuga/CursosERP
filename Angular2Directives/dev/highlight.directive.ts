/**
 * Created by Desarrollador 2 on 16/08/2016.
 */
import {Directive} from 'angular2/core';
import {OnInit} from "angular2/src/core/linker/interfaces";
import {ElementRef} from "angular2/src/core/linker/element_ref";
import {Renderer} from "angular2/src/core/render/api";

@Directive(
	{
		selector: '[myHighlight]',
		inputs: ['highlightColor:myHighlight'],
		host:
		{
			'(mouseenter)':'onMouseEnter()',
			'(mouseleave)':'onMouseLeave()'
		}
	}
)

//export class HighlightDirective implements OnInit
export class HighlightDirective
{
	private _defaultColor: string = 'green';
	highlightColor:string;

	constructor(private _elRef: ElementRef, private _renderer: Renderer){}


	/*ngOnInit():any
	{
		//this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor);
		this._elRef.nativeElement.style.backgroundColor = this.highlightColor || this._defaultColor;
	}*/

	onMouseEnter()
	{
		this.highlight(this.highlightColor || this._defaultColor);
	}

	onMouseLeave()
	{
		this.highlight(null);
	}

	highlight(color:string)
	{
		this._elRef.nativeElement.style.backgroundColor = color;
	}


}

/*
Errores en el video

1. en la variable de _defaultcolor
 private _defaultColor: 'green';//malo
 private _defaultColor: string = 'green';//bueno

2. con setElementStyle no reconoce el nombre de las propiedades(segundo parámetro) como background-color
 */