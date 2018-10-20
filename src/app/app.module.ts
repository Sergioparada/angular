import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import {FormsModule} from '@angular/forms';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { LibroBusquedaComponent } from './libro-busqueda/libro-busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibroDetalleComponent,
    LibroBusquedaComponent
  ],
  imports: [
    HttpClientModule,
   
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
