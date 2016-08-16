import {Component} from 'angular2/core';
import {AttributeDirectives} from './attribute-directive';
import {StructuralDirectives} from "./structural.directive";

@Component({

    selector: 'my-app',
    template: `
		<h1>Directives</h1>
		
		<h2>Attribute directives</h2>
        <my-attributes-directives></my-attributes-directives>
        
        <h2>Structural directives</h2>
        <my-structural-directives></my-structural-directives>
    `,
	directives: [AttributeDirectives, StructuralDirectives],
})

export class AppComponent
{

}
