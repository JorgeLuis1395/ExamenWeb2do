import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ProfesorComponent} from "./profesor/profesor.component";
import {EstudianteComponent} from "./estudiante/estudiante.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";

export const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  //{path:'estudiante/:idestudiante',component:ProfesorComponent},
  //{path:'estudiante/:idestudiante/:materia/:idmateria',component:EstudianteComponent},
  //{path:'transferencias',component:TransferenciaComponent},

];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
