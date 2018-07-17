import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ProfesorComponent} from "./profesor/profesor.component";
import {EstudianteComponent} from "./estudiante/estudiante.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";
import {LoginComponent} from "./login/login.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {TranferensiaComponent} from "./transferencia/tranferensia/tranferensia.component";
import {TramfesrenciaComponent} from "./transferencia/tramfesrencia/tramfesrencia.component";

export const routes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'estudiante/:idestudiante',component:EstudianteComponent},
  {path:'tramsferencias',component:TramfesrenciaComponent},
  {path:'estudiante/:idestudiante/:materia/:idmateria',component:ProfesorComponent},
  {path:'transferencias',component:TransferenciaComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'transferensias',component:TranferensiaComponent},


];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
