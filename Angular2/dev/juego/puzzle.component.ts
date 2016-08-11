import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component(
  {
    selector: 'mipuzzle',
    template: `
    <section class="setup">
      <h1>Quiero jugar a un juego</h1>
      <img id="imgTitulo" src="./images/saw.gif"/>
      <br><br>
      Escribe tu nombre por favor:
      <input type="text" #nombre (keyup)="0">
    </section>
    
    <section
    [ngClass]="
    {
      puzzle: true,
      solved: ficha1.value == nbrFicha1 && ficha2.value == nbrFicha2 && ficha3.value == nbrFicha3 && ficha4.value == nbrFicha4
    }"
    [ngStyle]="{display: nombre.value === '' ? 'none' : 'block'}"
    >
      <h2>Juego {{ficha1.value == nbrFicha1 && ficha2.value == nbrFicha2 && ficha3.value == nbrFicha3 && ficha4.value == nbrFicha4 ? 'ganado' : 'perdido'}}</h2>
      <p>Bienvenido {{nombre.value}}, que comience el juego
      <br>
      Instrucciones: adivina la convinación entre dígitos de 1 y 0.
      </p>
      Ficha 1: <input type="text" #ficha1 (keyup)="0"><br>
      Ficha 2: <input type="text" #ficha2 (keyup)="0"><br>
      Ficha 3: <input type="text" #ficha3 (keyup)="0"><br>
      Ficha 4: <input type="text" #ficha4 (keyup)="0"><br>
    </section>
    <h2 [hidden]="ficha1.value != nbrFicha1 || ficha2.value != nbrFicha2 || ficha3.value != nbrFicha3 || ficha4.value != nbrFicha4">Felicitaciones {{nombre.value}}, has ganado</h2>
    `,
    styleUrls: ['./src/css/juego.css'],
  })

export class PuzzleComponent
{
  nbrFicha1: number;
  nbrFicha2: number;
  nbrFicha3: number;
  nbrFicha4: number;
  
  ngOnInit()
  {
    this.nbrFicha1 = Math.round(Math.random());
    this.nbrFicha2 = Math.round(Math.random());
    this.nbrFicha3 = Math.round(Math.random());
    this.nbrFicha4 = Math.round(Math.random());
    
    console.log(this.nbrFicha1, this.nbrFicha2, this.nbrFicha3, this.nbrFicha4)
  }
}