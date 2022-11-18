import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/interface/produto';
import { AlertasService } from 'src/app/services/alertas.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent implements OnInit {

  produtos: IProduto[] = [];

  constructor(
    private produtoService: ProdutosService, 
    private alertaService: AlertasService
  ) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listar().subscribe(
      dados => {this.produtos = dados; console.log(dados);
    });
  }

  deletar(id?: number) {
    if (id) {
      this.produtoService.excluirProduto(id).subscribe(() => {
        this.alertaService.alertaSucesso('Produto removido com sucesso');
        const pfdecerto = this.produtos.findIndex( c => c.id === id);
        if (pfdecerto > -1) {
          this.produtos.splice(pfdecerto, 1);
        } 
      })
      this.listarProdutos();
    }
  }
}
