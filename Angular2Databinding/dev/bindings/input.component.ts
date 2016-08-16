import {Component, EventEmitter} from 'angular2/core';

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
      Válido: {{valido ? 'Si' : 'No'}}
    </div>
    
    <button [disabled]="!valido" (click)="enviar()">Enviar</button>
    `,

  inputs: ['misdatos'],
  outputs: ['enviado']
})

export class InputComponent
{
  misdatos = {nombre: '', edad: ''};
  completo = false;
  valido = false;
  enviado = new EventEmitter<{nombre: string, edad: string}>();

  onKeyup()
  {
    this.completo = this.misdatos.nombre != '' && this.misdatos.edad != '';

    this.valido = this.misdatos.nombre != '' && /^\d+$/.test(this.misdatos.edad);
  }

  enviar()
  {
    this.enviado.emit(this.misdatos);
  }
}
