import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly URL_produtos = `${environment.API}produtos`;

  constructor(private http: HttpClient) { }

  listar(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL_produtos);
  }

  inserir(novoProduto: any) {
    return this.http.post(this.URL_produtos, novoProduto).pipe(take(1));
  }

  buscarProdutoPorId(id: number): Observable<IProduto>{
    return this.http.get<IProduto>(`${this.URL_produtos}/${id}`);
  }

  excluirProduto(id: number): Observable<object> {
    return this.http.delete(`${this.URL_produtos}/${id}`);
  }

  atualizar(produto: IProduto) {
    return this.http.put(`${this.URL_produtos}/${produto.id}`, produto);
  }

}
