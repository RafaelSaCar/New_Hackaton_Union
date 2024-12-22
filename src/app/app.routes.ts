import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MembroComponent } from './membro/membro.component';
import { ConvidadoComponent } from './convidado/convidado.component';
import { ReuniaoComponent } from './reuniao/reuniao.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { AcompanhamentoReferenciasComponent } from './acompanhamento-referencias/acompanhamento-referencias.component';
import { OpnfComponent } from './opnf/opnf.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Página de Login
  { path: 'dashboard', component: DashboardComponent }, // Dashboard principal
  { path: 'membros', component: MembroComponent }, // Página de Membros
  { path: 'convidados', component: ConvidadoComponent }, // Página de Convidados
  { path: 'reunioes', component: ReuniaoComponent }, // Página de Reuniões
  { path: 'referencias', component: ReferenciaComponent }, // Página de Referências
  { path: 'acompanhamento-referencias', component: AcompanhamentoReferenciasComponent }, // Acompanhamento de Referências
  { path: 'opnf', component: OpnfComponent }, // Página de OPNF
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para o Login como padrão
];
