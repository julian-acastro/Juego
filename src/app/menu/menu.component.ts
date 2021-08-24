import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public newGame: boolean= false;

  ngOnInit(): void {
  }


  newGameClick(){
    if(this.newGame==false){
      this.newGame= true;
    }else{
      this.newGame=false;
    }
  }
  goGame(pSize:number, bSize:number){
  }
}
