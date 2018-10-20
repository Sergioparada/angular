import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
 
@Component({
  selector: 'app-libro-busqueda',
  templateUrl: './libro-busqueda.component.html',
  styleUrls: [ './libro-busqueda.component.css' ]
})


export class LibroBusquedaComponent implements OnInit {
  libros$: Observable<Libro[]>;

  
  private searchTerms = new Subject<string>();
 
  constructor(private libroService: LibroService) {}
 
 
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.libros$ = this.searchTerms.pipe(
   
      debounceTime(300),
 

      distinctUntilChanged(),
 
      
      switchMap((term: string) => this.libroService.searchLibros(term)),
    );

    
  }
}