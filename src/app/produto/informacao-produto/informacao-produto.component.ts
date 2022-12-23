import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-informacao-produto',
  templateUrl: './informacao-produto.component.html',
  styleUrls: ['./informacao-produto.component.scss']
})
export class InformacaoProdutoComponent implements OnInit {

  
  produtos: IProduto[] = [];
  
  constructor(
    private produtoService: ProdutosService
  ) { }

  ngOnInit(): void {
  }

}
