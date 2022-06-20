import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Piatto } from '../@models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  piatti: Piatto[] = [];

  constructor(private httpClient: HttpClient) { 
    
  }

  getMenu() {    
    return this.httpClient.get<Piatto[]>('https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti');
  }

  getPiatto(piattoId: number) {
    return this.httpClient.get<Piatto>(`https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti/${piattoId}`);
  }

  addPiatto(piatto: Partial<Piatto>) {
    return this.httpClient.post<Piatto>('https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti', piatto);
  }
}
