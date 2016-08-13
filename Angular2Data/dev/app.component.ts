import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

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
          <my-input (enviado)="enviar($event)" [misdatos]="confirmarmisdatos"></my-input>
        </div>
        
        <div class="container">
          <my-confirm (confirmado)="confirmar($event)" [misdatos]="misdatos"></my-confirm>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent]
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

  enviar(misdatos:{nombre:string, edad:string})
  {
    //this.misdatos = misdatos;
    this.misdatos = {nombre: misdatos.nombre, edad: misdatos.edad};
  }

  confirmar(misdatos:{nombre:string, edad:string})
  {
    //this.confirmarmisdatos = misdatos;
    this.confirmarmisdatos = {nombre: misdatos.nombre, edad: misdatos.edad};
  }
}
