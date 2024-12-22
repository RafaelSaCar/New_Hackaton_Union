import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acompanhamento-referencias',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione CommonModule aqui
  templateUrl: './acompanhamento-referencias.component.html',
  styleUrls: ['./acompanhamento-referencias.component.css']
})
export class AcompanhamentoReferenciasComponent {
  referencias: any[] = [];
  filtroStatus: string = '';

  ngOnInit(): void {
    this.carregarReferencias();
  }

  carregarReferencias(): void {
    this.referencias = [
      { id: 1, membro: 'Maria Silva', observacoes: 'Interessada em parcerias comerciais.', tipo: 'Interna', status: 'Não entrei em contato' },
      { id: 2, membro: 'Carlos Oliveira', observacoes: 'Busca contato para novos negócios.', tipo: 'Externa', status: 'Contatado' },
      { id: 3, membro: 'Ana Costa', observacoes: 'Referência para consultoria financeira.', tipo: 'Interna', status: 'Sem resposta de referência' },
      { id: 4, membro: 'João Pereira', observacoes: 'Negociação concluída com sucesso.', tipo: 'Externa', status: 'Negócio fechado' }
    ];
  }

  filtrarPorStatus(status: string): void {
    this.filtroStatus = status;
  }

  getReferenciasFiltradas(): any[] {
    return this.filtroStatus
      ? this.referencias.filter(ref => ref.status === this.filtroStatus)
      : this.referencias;
  }

  verDetalhes(referencia: any): void {
    alert(`Detalhes da Referência:\nMembro: ${referencia.membro}\nObservações: ${referencia.observacoes}\nTipo: ${referencia.tipo}\nStatus: ${referencia.status}`);
  }
}
