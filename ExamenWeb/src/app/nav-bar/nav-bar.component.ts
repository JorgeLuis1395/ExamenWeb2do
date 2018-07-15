import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  indice:number;
  nombre:string;

  constructor() { }

  ngOnInit() {
   // this.nombre=this._usuario.getUsuario()[0].nombre;
    console.log(this.indice)
  }


}
