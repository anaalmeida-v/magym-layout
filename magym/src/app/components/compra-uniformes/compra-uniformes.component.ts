import { CompraUniformes } from './compra-uniformes.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Uniforme {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})
export class CompraUniformes {
  private uniformesSubject: BehaviorSubject<Uniforme[]> = new BehaviorSubject<
    Uniforme[]
  >([]);
  uniformes$: Observable<Uniforme[]> = this.uniformesSubject.asObservable();

  constructor() {
    this.initializeUniformes();
  }

  private initializeUniformes(): void {
    const uniformes: Uniforme[] = [
      { id: 1, nome: 'Camiseta Azul', categoria: 'Camisetas', preco: 25.0 },
      { id: 2, nome: 'Calça Preta', categoria: 'Calças', preco: 50.0 },
      { id: 3, nome: 'Bermuda Jeans', categoria: 'Bermudas', preco: 35.0 },
      // Adicione mais uniformes conforme necessário
    ];
    this.uniformesSubject.next(uniformes);
  }
}
