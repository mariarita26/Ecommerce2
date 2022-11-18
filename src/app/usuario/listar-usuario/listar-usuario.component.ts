import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICliente } from 'src/app/interface/cliente';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesFirestoreService } from 'src/app/services/clientes-firestore.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
})
export class ListarUsuarioComponent implements OnInit {

  clientes: ICliente[] = [];
  displayedColumns = ['imagem','nome', 'email', 'cpf', 'dataDeNascimento', 'actions'];

  constructor(
    //private clienteService: ClientesService,
    private clienteFiresrote: ClientesFirestoreService,
    private alertaService: AlertasService
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clienteFiresrote.listar().subscribe((clientes: ICliente[]) => {
      this.clientes = clientes;
    });
  }

  // DELETAR CLIENTE NO JSON SERVER
  // deletar2(id: number) {
  //   if (id) {
  //     this.clienteService.excluirCliente(id).subscribe(() => {
  //       this.alertaService.alertaSucesso('Cliente removido com sucesso');
  //       const pfdecerto = this.clientes.findIndex( c => c.id === id);
  //       if (pfdecerto > -1) {
  //         this.clientes.splice(pfdecerto, 1);
  //       } 
  //     })
  //     this.listar();
  //   }      
  // }

  deletar2(usuarioARemover: ICliente): void {
    this.clienteFiresrote.apagar(usuarioARemover.id).subscribe(
      removido => {
        this.alertaService.alertaSucesso('Cliente removido com sucesso');
        console.log(removido);
        const indxUsuario = this.clientes.findIndex(u => u.id === usuarioARemover.id);

        if (indxUsuario > -1) {
          this.clientes.splice(indxUsuario, 1);
        }

      }
    );
  }
}
