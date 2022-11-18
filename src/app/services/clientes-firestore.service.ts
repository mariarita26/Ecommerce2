import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { ICliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesFirestoreService {

  // link para coleção de usuários específica
  colecaoClientes: AngularFirestoreCollection<ICliente>;

  NOME_COLECAO = 'clientes';

  constructor(private afs: AngularFirestore) { 
    this.colecaoClientes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<ICliente[]> {
    //valueChanges altera os dados automaticamente
    return this.colecaoClientes.valueChanges({idField: 'id'});  
  }

  inserir(cliente: ICliente): Observable<object> {
    delete cliente.id;
    return from(this.colecaoClientes.add(Object.assign({}, cliente)));
  }

  pesquisarPorId(id: string): Observable<ICliente> {
    return this.colecaoClientes.doc(id).get()
      .pipe(map(document => document.data() as ICliente));

  }

  apagar(idParaRemocao?: string): Observable<void> {
    return from(this.colecaoClientes.doc(idParaRemocao).delete());
  }

  atualizar(cliente: ICliente): Observable<void> {
    const id = cliente.id;
    delete cliente.id;

    return from(this.colecaoClientes.doc(id)
      .update(Object.assign({}, cliente)));
  }
}
