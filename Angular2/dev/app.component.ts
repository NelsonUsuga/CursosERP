import {Component} from 'angular2/core';
import {micomponente} from './micomponente.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hola Nelson!</p>
        <micomponente></micomponente>
    `,
    directives:[micomponente]
})
export class AppComponent {

}
