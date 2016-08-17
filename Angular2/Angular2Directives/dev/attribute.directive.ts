/**
	* Created by Desarrollador 2 on 16/08/2016.
	*/

import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({

selector: 'my-attributes-directives',
template: `
	<div [myHighlight]="'red'">
		Resaltame
	</div>
	<br><br>
	<div myHighlight>
		Otro resaltame
	</div>
    `,
	directives: [HighlightDirective],
})

export class AttributeDirectives
{

}