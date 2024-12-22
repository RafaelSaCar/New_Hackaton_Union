import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent {
  membroForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Inicializando o formulário com validações
    this.membroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      empresa: [''],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      curriculo: [''],
      siteDaEmpresa: ['']
    });
  }

  // Método para enviar os dados para o backend
  onSubmit(): void {
    if (this.membroForm.valid) {
      const membroData = this.membroForm.value;

      this.apiService.addMembro(membroData).subscribe({
        next: (response) => {
          console.log('Membro gravado no banco com sucesso:', response);
          alert('Cadastro realizado com sucesso!');
          this.membroForm.reset();
        },
        error: (error) => {
          console.error('Erro ao gravar no banco:', error);
          alert('Erro ao cadastrar membro. Por favor, tente novamente.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }
}
