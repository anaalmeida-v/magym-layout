import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompraUniformes } from './compra-uniformes.model';

@Component({
  selector: 'app-compra-uniformes',
  templateUrl: './compra-uniformes.component.html',
  styleUrls: ['./compra-uniformes.component.css'],
})
export class CompraUniformesComponent {
  uniformes: CompraUniformes[] = [
    {
      id: 1,
      peca_uniforme: 'Camiseta Preta',
      preco: 50.00,
      foto_uniforme: '../../../assets/camiseta-preta-masculina.png',
    },
    {
      id: 1,
      peca_uniforme: 'Camiseta Branca',
      preco: 25.99,
      foto_uniforme: '../../../assets/camiseta-branca-feminina.png',
    },
    {
      id: 2,
      peca_uniforme: 'Calça Jeans',
      preco: 49.99,
      foto_uniforme: 'url_da_imagem_calca_jeans.jpg',
    },
    {
      id: 2,
      peca_uniforme: 'Calça Jeans',
      preco: 49.99,
      foto_uniforme: 'url_da_imagem_calca_jeans.jpg',
    },
    {
      id: 2,
      peca_uniforme: 'Calça Jeans',
      preco: 49.99,
      foto_uniforme: 'url_da_imagem_calca_jeans.jpg',
    },
    {
      id: 2,
      peca_uniforme: 'Calça Jeans',
      preco: 49.99,
      foto_uniforme: 'url_da_imagem_calca_jeans.jpg',
    },
    // Adicione mais uniformes aqui
  ];
  uniformeSelecionado: CompraUniformes | null = null;
  uniformeClicado: number | null = null;

  constructor(private router: Router) {}

  showUniformDetail(uniforme: CompraUniformes) {
    this.uniformeSelecionado = uniforme;
    this.uniformeClicado = uniforme.id;
  }
}
