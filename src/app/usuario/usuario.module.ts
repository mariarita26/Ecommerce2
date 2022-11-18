import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';

// p q n funcionou a importação do FormsModule e ReactiveFormsModule aqui???

@NgModule({
  declarations: [
    CadastrarComponent,
    ListarUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class UsuarioModule { }
