import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProfesorComponent} from "./profesor/profesor.component";
import {EstudianteComponent} from "./estudiante/estudiante.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";

export const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'profesor/:idprofesor',component:ProfesorComponent},
  {path:'profesor/:idprofesor/:estudiante/:idestudiante',component:EstudianteComponent},
  {path:'transferencias',component:TransferenciaComponent},

];
