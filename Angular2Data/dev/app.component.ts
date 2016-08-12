import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Actividad 1</h1>
        <p>Hola Nelson!</p>
        {{'Oee'}}
        <input type="text" [value]="nombre" [ngClass] ="{red:true}" [disabled]="evaluar()"
        (keyup)="onKeyup(nombreElement.value)" #nombreElement>
        <p>{{values}}</p>
        <br><br>
        <input type="text" [(ngModel)]="nombre">
        <p>Mi nombre es {{nombre}}</p>
        
        <h1>Actividad 2</h1>
        
        <div class="container">
          <my-input></my-input>
        </div>
        
        <div class="container">
          
        </div>
    `,
    directives: [InputComponent]
})

export class AppComponent {
  nombre = 'Nelson Úsuga';
  values = '';
  
  evaluar()
  {
    return false;
  }
  
  onKeyup(value:string)
  {
    this.values += value + ' | ';
  }
  
  misdatos = {nombre: '', edad: ''};
  confirmarmisdatos = {nombre: '', edad: ''};
}
