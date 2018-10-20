import { Injectable } from '@angular/core';
import {Libro} from './libro';
import {LIBROS} from './mock-son';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private librosUrl = 'api/libros';  // URL to web api

  getLibros(): Observable<Libro[]> {
    return of(LIBROS);
  }

  getLibro(id: number): Observable<Libro> {
    return of(LIBROS.find(libro => libro.id === id));
  }

  searchLibros(term: string): Observable<Libro[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Libro[]>(`${this.librosUrl}/?name=${term}`)
    ;
  }

  constructor(private http: HttpClient,
    ) { }
}
