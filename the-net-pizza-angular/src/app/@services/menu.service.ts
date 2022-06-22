import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piatto } from '../@models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  jsonServerUrl: string = 'https://my-json-server.typicode.com/michelefenu/tnv-academy-VII';
  nodeBaseUrl: string = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) { 
    
  }

  getMenu() {    
    return this.httpClient.get<Piatto[]>(`${this.nodeBaseUrl}/piatti`);
  }

  getPiatto(piattoId: number) {
    return this.httpClient.get<Piatto>(`${this.nodeBaseUrl}/piatti/${piattoId}`);
  }

  addPiatto(piatto: Partial<Piatto>) {
    return this.httpClient.post<Piatto>(`${this.nodeBaseUrl}/piatti`, piatto);
  }

  editPiatto(piattoId: number, piatto: Partial<Piatto>) {
    return this.httpClient.patch<Piatto>(`${this.nodeBaseUrl}/piatti/${piattoId}`, piatto);
  }

  deletePiatto(piattoId: number) {
    return this.httpClient.delete<Piatto>(`${this.nodeBaseUrl}/piatti/${piattoId}`);
  }
}
