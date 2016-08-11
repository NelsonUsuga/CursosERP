import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hola Nelson!</p>
        {{'Oee'}}
        <input type="text" [value]="nombre">
    `,
})
export class AppComponent {
  nombre = 'Nelson Úsuga';
}
