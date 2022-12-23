import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { InformacaoProdutoComponent } from './produto/informacao-produto/informacao-produto.component';
import { ListagemProdutosComponent } from './produto/listagem-produtos/listagem-produtos.component';
import { CadastrarComponent } from './usuario/cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
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
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'informacao-produto/:id', component: InformacaoProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
