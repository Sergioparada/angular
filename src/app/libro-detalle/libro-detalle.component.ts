import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LibroService }  from '../libro.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {
  libro: Libro;
  
  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLibro();
  }

  getLibro(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.libroService.getLibro(id)
      .subscribe(libro => this.libro = libro);
  }

  irAtras(): void {
    this.location.back();
  }

}
