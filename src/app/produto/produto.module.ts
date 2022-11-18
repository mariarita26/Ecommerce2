import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CadastroProdutoComponent,
    ListagemProdutosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    CadastroProdutoComponent,
    ListagemProdutosComponent
  ]
})
export class ProdutoModule { }
