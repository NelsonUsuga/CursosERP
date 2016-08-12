import {Component} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
    <h2>Tu información por favor</h2>
    
    <div>
      <label for="nombre">Tu nombre</label>
      
      <input type="text" id="nombre"
      [(ngModel)]="misdatos.nombre"
      (keyup)="onKeyup()">
      
    </div>
    
    <div>
      <label for="edad">Tu edad</label>
      
      <input type="text" id="edad"
      [(ngModel)]="misdatos.edad"
      (keyup)="onKeyup()">
      
    </div>
    
    <br>
    
    <div>
      Completo: {{completo ? 'Si' : 'No'}}
    </div>
    
    <div>
      Valido: {{valido ? 'Si' : 'No'}}
    </div>
    
    <button [disabled]="!valido">Aceptar</button>
    `,
})

export class InputComponent
{
  misdatos = {nombre: '', edad: ''};
  completo = false;
  valido = false;
  
  onKeyup()
  {
    this.completo = this.misdatos.nombre != '' && this.misdatos.edad != '';
    
    this.valido = this.misdatos.nombre != '' && /^\d+$/.test(this.misdatos.edad));
  }
}
