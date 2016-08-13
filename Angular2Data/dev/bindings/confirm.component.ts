/**
	* Created by Desarrollador 2 on 12/08/2016.
	*/
import {Component, EventEmitter} from 'angular2/core';

@Component({

  selector: 'my-confirm',
  template: `
  <h2>Tu información a enviar es correcta?</h2>
  
  <p>Tu nombre es <span class="highlight">{{misdatos.nombre}}</span> y tu edad es <span class="highlight">{{misdatos.edad}}</span> años, por favor click en 'Confirmar' para cambiar tu información</p>
  
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
    
    <button [disabled]="!valido" (click)="confirmar()">Confirmar</button>
    `,

  inputs: ['misdatos'],
  outputs: ['confirmado']
})

export class ConfirmComponent {
  misdatos = {nombre: '', edad: ''};
  completo = false;
  valido = false;
  confirmado = new EventEmitter<{nombre: string, edad: string}>();

  onKeyup()
  {
    this.completo = this.misdatos.nombre != '' && this.misdatos.edad != '';

    this.valido = this.misdatos.nombre != '' && /^\d+$/.test(this.misdatos.edad);
  }

  confirmar()
  {
    this.confirmado.emit(this.misdatos);
  }
}
