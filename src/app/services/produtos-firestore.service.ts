import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { IProduto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosFirestoreService {

  colecaoProdutos: AngularFirestoreCollection<IProduto>;

  NOME_COLECAO = 'produtos';
  
  constructor(private afs: AngularFirestore) { 
    this.colecaoProdutos = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<IProduto[]> {
    return this.colecaoProdutos.valueChanges({idField: 'id'});  
  }

  inserir(produto: IProduto): Observable<object> {
    delete produto.id;
    return from(this.colecaoProdutos.add(Object.assign({}, produto)));
  }

  pesquisarPorId(id: string): Observable<IProduto> {
    return this.colecaoProdutos.doc(id).get()
      .pipe(map((document => document.data() as IProduto)));

  }

  apagar(idParaRemocao?: string): Observable<void> {
    return from(this.colecaoProdutos.doc(idParaRemocao).delete());
  }

  // atualizar(produto: IProduto): Observable<void> {  
  //   const id = produto.id;
  //   delete produto.id;

  //   return from(this.colecaoProdutos.doc(id)
  //     .update(Object.assign({}, produto)));
  // }
}
