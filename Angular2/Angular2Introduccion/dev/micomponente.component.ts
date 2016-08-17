import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
import {Juego} from './juego.component';

@Component(
  {
    selector: 'micomponente',
    template: `Hola, mi <span [style.color]="inputElement.value==='si'?'cyan':''">nombre</span> es {{name}}, soy un teso en <span [class.clase]="inputElement.value==='si'">Angular2</span>
    <br><br>
    <input type="text" #inputElement (keyup)="0">
    <br><br>
    <button [disabled]="inputElement.value!=='si'">Boton</button>
    <test></test>
    <juego></juego>`,
    styleUrls: ['src/css/micomponente.css'],
    directives: [TestComponent,Juego]
  })
export class micomponente implements OnInit
{
  name:string;
  
  ngOnInit():any
  {
    this.name = "Nelson Arley Úsuga Moncada";
  }
}