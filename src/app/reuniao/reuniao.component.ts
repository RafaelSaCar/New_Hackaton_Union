import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reuniao',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione FormsModule aqui
  templateUrl: './reuniao.component.html',
  styleUrls: ['./reuniao.component.css']
})
export class ReuniaoComponent {
  membros: any[] = [];
  reunioes: any[] = [];
  novaReuniao: any = {
    membroId2: '',
    dataHora: '',
    local: '',
    motivo: ''
  };

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

  adicionarReuniao(): void {
    const novaReuniao = {
      id: this.reunioes.length + 1,
      membro1: { id: 1, nome: 'John Doe' },
      membro2: this.membros.find(m => m.id === parseInt(this.novaReuniao.membroId2, 10)),
      dataHora: this.novaReuniao.dataHora,
      local: this.novaReuniao.local,
      motivo: this.novaReuniao.motivo
    };

    this.reunioes.push(novaReuniao);
    this.novaReuniao = { membroId2: '', dataHora: '', local: '', motivo: '' };
  }

  detalharReuniao(reuniao: any): void {
    alert(`
      Detalhes da Reunião:
      Membro Solicitante: ${reuniao.membro1.nome}
      Participante: ${reuniao.membro2?.nome || 'N/A'}
      Data e Hora: ${reuniao.dataHora}
      Local: ${reuniao.local}
      Motivo: ${reuniao.motivo}
    `);
  }
}
