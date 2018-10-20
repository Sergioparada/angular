import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component'

const routes: Routes = [
  { path: 'libros', component: LibrosComponent },
  { path: 'detalle/:id', component: LibroDetalleComponent },
  { path: '', redirectTo: '/libros', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
