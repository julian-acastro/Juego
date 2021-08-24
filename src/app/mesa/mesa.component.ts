import { Component, OnInit } from '@angular/core';
import {faBacterium, faBell, faCandyCane, faChessBishop, faChessKing, faChessKnight, faChessQueen, faChessRook, faChild, faCoffee, faBug, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {
  iconos= [
    faCoffee ,
    faBug,
    faAppleAlt,
    faBacterium,
    faBell,
    faCandyCane,
    faChessKnight,
    faChessKing,
    faChessQueen,
    faChessBishop,
    faChessRook,
    faChild,
  ];

  cartas = this.iconos.concat(this.iconos);


  seleccionados: number[]=[];
  yaSeleccionados: number[]=[];

  constructor() {
    this.shuffleArray(this.cartas);
  }

  ngOnInit(): void {
  }

  shuffleArray (array:any):void {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  pick (num:any){
  if(!this.seleccionados.includes(num)&&!this.yaSeleccionados.includes(num)){
    this.seleccionados.push(num);
    if(this.seleccionados.length >= 2){
      console.log(this.seleccionados)
      if(this.cartas[this.seleccionados[0]]==this.cartas[this.seleccionados[1]] ){
        this.yaSeleccionados.push(this.seleccionados[0])
        this.yaSeleccionados.push(this.seleccionados[1])
      }
      for (let i = this.seleccionados.length; i > 0; i--) {
        this.seleccionados.pop();
      }
    }
  }
   
  }
  exist(num:any):boolean{
    var a=(this.seleccionados.includes(num) || this.yaSeleccionados.includes(num));
    this
    console.log(a)

    return a;
  }

}
