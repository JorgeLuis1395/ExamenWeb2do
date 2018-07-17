import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tranferensia',
  templateUrl: './tranferensia.component.html',
  styleUrls: ['./tranferensia.component.css']
})
export class TranferensiaComponent implements OnInit {

  estudiante;
  button;
  materia;
  _parametros:any;
  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarEstudiante();
    this.cargarMateria();
  }
  cargarMateria(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:3000/materia/mostrarMateria?estudianteIdIdEstudiante='+this._parametros.idequipo)
        .subscribe(
          (res)=>{
            this.materia=res;
            console.log(this.materia);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  cargarEstudiante(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:3000/Estudiante/mostrarEstudiante?id='+this._parametros.idequipo)
        .subscribe(
          (res)=>{
            this.estudiante=res;
            console.log(this.estudiante);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }
  rechazar(){
    alert("Deseas rechazar la solicitud")
  }
 aceptar(){
    alert("Intercambio Realizado")
 }
}

