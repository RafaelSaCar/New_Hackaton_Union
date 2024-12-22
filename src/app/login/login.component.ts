import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Importa o FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = { email: '', senha: '' }; // Dados do formulário
  erroMensagem = ''; // Mensagem de erro

  constructor(private router: Router) {} // Injeta o Router

  login(): void {
    // Simulação de login simples
   
      this.router.navigateByUrl('/dashboard'); // Redireciona para o Dashboard
   
  }
}