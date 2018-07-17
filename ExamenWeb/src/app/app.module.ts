import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routes";
import {SearchPipe} from "./pipes/search.pipe";
import {AutorizacionService} from "./servicios/autorizacion.service";
import {CredencialesService} from "./servicios/credenciales.service";
import { UsuarioComponent } from './usuario/usuario.component';
import { TranferensiaComponent } from './transferencia/tranferensia/tranferensia.component';
import { TramfesrenciaComponent } from './transferencia/tramfesrencia/tramfesrencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EstudianteComponent,
    ProfesorComponent,
    TransferenciaComponent,
    NavBarComponent,
    SearchPipe,
    UsuarioComponent,
    TranferensiaComponent,
    TramfesrenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [AutorizacionService, CredencialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
