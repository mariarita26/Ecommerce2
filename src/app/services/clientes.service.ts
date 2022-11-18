import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly URL_clientes = `${environment.API}clientes`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ICliente[]>(this.URL_clientes);
  }

  inserir(novoCliente: ICliente) {
    return this.http.post<ICliente>(this.URL_clientes, novoCliente);
  }

  inserir2(novoCliente: any) {
    return this.http.post(this.URL_clientes, novoCliente).pipe(take(1));
  }

  atualizar(cliente: ICliente) {
    return this.http.put(`${this.URL_clientes}/${cliente.id}`, cliente);
  }

  buscarClientePorId(id: number) {
    return this.http.get<ICliente>(`${this.URL_clientes}/${id}`);
  }

  excluirCliente(id: number): Observable<object>{
    return this.http.delete(`${this.URL_clientes}/${id}`);
  }
}
