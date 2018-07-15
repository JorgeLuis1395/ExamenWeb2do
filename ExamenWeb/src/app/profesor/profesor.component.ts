import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  materia=[];
  _parametros:any;

  nombre:string;
  estado: boolean;
  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarMateria();
  }
  cargarMateria(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/jugador?id='+this._parametros.id_materia)
        .subscribe(
          (res:any[])=>{
            this.materia=res;
            console.log(this.materia);
            console.log(this.materia[0].nombre);
            //this.estado=this._compras.buscarJugadores(this.jugador[0].id,this.jugador[0].equipoIDFK.id);
            console.log(this.estado);
           // console.log(this._compras.getJugadores());
          },
          (err)=>{
            console.log(err);
          }
        )


    });
  }

  transferirMateria(){
    //this._compras.ingresarJugadores(this.jugador);
    //this._compras.actualizarTamanio();
    //console.log(this._compras)
  }


}
