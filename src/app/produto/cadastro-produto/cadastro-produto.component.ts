import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/interface/produto';
import { AlertasService } from 'src/app/services/alertas.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements OnInit {
  produtos: IProduto[] = [];

  idProduto = 0;

  formulario = new FormGroup({
    titulo: new FormControl('', Validators.required),
    valor: new FormControl(0,[Validators.required]),
    foto: new FormControl('', Validators.required),
    informacao: new FormControl('', Validators.required),
  });

  constructor(
    private produtoService: ProdutosService,
    private alertaService: AlertasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe((dados) => {
      this.produtos = dados;
      console.log(dados);
    });

    this.idProduto = Number(this.route.snapshot.paramMap.get('id'));
    if(this.idProduto !== 0) {
      this.produtoService.buscarProdutoPorId(this.idProduto).subscribe((produto: IProduto) => {
        this.formulario.setValue({
          titulo: produto.titulo,
          valor: produto.valor,
          foto: produto.foto,
          informacao: produto.informacao
        });
      }, (error) => {
        console.log(error); 
      });
    }
  }

  enviar() {

    const produto: IProduto = this.formulario.value as IProduto;

    if (this.idProduto) {
      produto.id = this.idProduto;
      this.produtoService.atualizar(produto).subscribe(() => {
        this.alertaService.alertaSucesso('Produto atualizado com sucesso');
        this.router.navigate(['/listar-produtos']);
      })
      return;
    }

    this.produtoService.inserir(this.formulario.value).subscribe(() => {
        this.alertaService.alertaSucesso('Produto cadastrado com sucesso');
        this.router.navigate(['/listar-produtos']);
        console.log('oioi');
      },(error) => {
        console.log(error);
      });
  }

 
}
