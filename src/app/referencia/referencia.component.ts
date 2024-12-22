import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referencia',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione CommonModule aqui
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.css']
})
export class ReferenciaComponent {
  membros: any[] = [];
  novaReferencia: any = {
    membroId: '',
    observacoes: '',
    tipoReferencia: '',
    avaliacao: 0
  };
  referencias: any[] = [];

  ngOnInit(): void {
    this.carregarMembros();
  }

  carregarMembros(): void {
    this.membros = [
      { id: 1, nome: 'John Doe' },
      { id: 2, nome: 'Jane Smith' },
      { id: 3, nome: 'Bob Johnson' }
    ];
  }

  cadastrarReferencia(): void {
    if (
      this.novaReferencia.membroId &&
      this.novaReferencia.observacoes &&
      this.novaReferencia.tipoReferencia &&
      this.novaReferencia.avaliacao
    ) {
      const referencia = {
        id: this.referencias.length + 1,
        membro: this.membros.find(m => m.id === parseInt(this.novaReferencia.membroId, 10)),
        observacoes: this.novaReferencia.observacoes,
        tipoReferencia: this.novaReferencia.tipoReferencia,
        avaliacao: this.novaReferencia.avaliacao
      };

      this.referencias.push(referencia);
      alert('Referência cadastrada com sucesso!');
      this.novaReferencia = { membroId: '', observacoes: '', tipoReferencia: '', avaliacao: 0 };
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  definirAvaliacao(nota: number): void {
    this.novaReferencia.avaliacao = nota;
  }
}
