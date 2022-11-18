import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { ListagemProdutosComponent } from './produto/listagem-produtos/listagem-produtos.component';
import { CadastrarComponent } from './usuario/cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  //criar uma rota padrão
  {
    path: '', component: ListagemProdutosComponent
  },
  {
    path: 'cadastrar-cliente', component: CadastrarComponent
  },
  {
    path: 'clientes/editar/:id', component: CadastrarComponent
  },
  {
    path: 'listar', component: ListarUsuarioComponent
  },
  {
    path: 'cadastrar-produto', component: CadastroProdutoComponent
  },
  {
    path: 'listar-produtos', component: ListagemProdutosComponent
  },
  {
    path: 'produtos/editar/:id', component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
