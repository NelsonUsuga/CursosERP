import {Component} from 'angular2/core';
import {PuzzleComponent} from './juego/puzzle.component';

@Component(
  {
    selector: 'juego',
    template:'<mipuzzle></mipuzzle>',
    directives:[PuzzleComponent]
  })

export class Juego
{
  
}