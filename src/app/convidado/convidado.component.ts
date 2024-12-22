import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-convidado',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.scss'],
})
export class ConvidadoComponent {
  novoConvidado = {
    nome: '',
    dataHora: '',
    telefone: '',
    especialidade: '',
    membroId: 1,
  };

  constructor(private apiService: ApiService) {}

  gravarConvidado(): void {
    if (!this.novoConvidado.nome || !this.novoConvidado.dataHora) {
      alert('Nome e Data/Hora são obrigatórios!');
      return;
    }

    this.apiService.addConvidado(this.novoConvidado).subscribe(
      () => alert('Convidado salvo com sucesso!'),
      (error) => alert('Erro ao salvar convidado. Tente novamente!')
    );
  }
}