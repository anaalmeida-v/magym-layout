import { Component } from '@angular/core';

@Component({
  selector: 'app-aluga-armario-oficina-mecanica',
  templateUrl: './aluga-armario-oficina-mecanica.component.html',
  styleUrls: ['./aluga-armario-oficina-mecanica.component.css']
})
export class AlugaArmarioOficinaMecanicaComponent {
  onArmarioClick(event: any) {
    const isOcupado = event.target.classList.contains('ocupado');

    if (!isOcupado) {
      console.log('Clicou em um item da lista!');
      // Adicione a lógica desejada aqui
    } else {
      console.log('Item ocupado, não pode ser acessado.');
    }
  }
}
