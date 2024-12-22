import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar diretivas básicas

@Component({
  selector: 'app-opnf',
  standalone: true,
  imports: [FormsModule, CommonModule], // Adicione FormsModule aqui
  templateUrl: './opnf.component.html',
  styleUrls: ['./opnf.component.css']
})
export class OpnfComponent {
  referencia: any = {
    nome: 'João Pereira',
    dataContato: '10/12/2024',
    status: 'Negócio fechado',
    telefone: '(11) 98765-4321',
    especialidade: 'Consultoria Empresarial',
    observacoes: 'Cliente satisfeito, recomendação positiva.'
  };

  novaOpnf: any = {
    valor: '',
    observacoes: ''
  };

  cadastrarOpnf(): void {
    if (this.novaOpnf.valor && this.novaOpnf.observacoes) {
      alert(`
        OPNF cadastrado com sucesso!
        Valor: ${this.novaOpnf.valor}
        Observações: ${this.novaOpnf.observacoes}
      `);
      this.novaOpnf = { valor: '', observacoes: '' }; // Reset do formulário
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
