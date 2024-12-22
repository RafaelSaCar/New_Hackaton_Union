import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8090/api'; // URL base do backend

  constructor(private http: HttpClient) {}

  // === Membros ===
  getMembros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/membro`);
  }

  getMembroById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/membro/${id}`);
  }

  addMembro(membro: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/membro`, membro);
  }

  updateMembro(id: number, membro: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/membro/${id}`, membro);
  }

  deleteMembro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/membro/${id}`);
  }

  // === Reuniões ===
  getReunioes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/reuniao`);
  }

  getReuniaoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reuniao/${id}`);
  }

  addReuniao(reuniao: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reuniao`, reuniao);
  }

  updateReuniao(id: number, reuniao: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reuniao/${id}`, reuniao);
  }

  deleteReuniao(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/reuniao/${id}`);
  }

  // === Referências ===
  getReferencias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/referencia`);
  }

  getReferenciaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/referencia/${id}`);
  }

  addReferencia(referencia: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/referencia`, referencia);
  }

  updateReferencia(id: number, referencia: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/referencia/${id}`, referencia);
  }

  deleteReferencia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/referencia/${id}`);
  }

  // === Convidados ===
  getConvidados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/convidado`);
  }

  

   // Método para buscar todos os membros
   getAllMembros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/membro`);
  }

  addConvidado(convidado: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/convidados`, convidado);
  }

  updateConvidado(id: number, convidado: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/convidado/${id}`, convidado);
  }

  deleteConvidado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/convidados/${id}`);
  }
}
