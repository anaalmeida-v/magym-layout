import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categoriasSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  categorias$: Observable<string[]> = this.categoriasSubject.asObservable();

  constructor() {
    this.initializeCategorias();
  }

  private initializeCategorias(): void {
    const categorias: string[] = ['Camisetas', 'Calças', 'Bermudas'];
    this.categoriasSubject.next(categorias);
  }
}
