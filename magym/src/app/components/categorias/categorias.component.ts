import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: string[] = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.categorias$.subscribe(categorias => this.categorias = categorias);
  }

  categoriaClicada(categoria: string): void {
    // Adicione lógica para tratar a categoria clicada, se necessário
  }
}
