import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  
  libros: Libro[];

  getLibros(): void {
    this.libroService.getLibros()
      .subscribe(libros => this.libros = libros);
  }
  
  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.getLibros();
  }

}
