import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interface/cliente';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesFirestoreService } from 'src/app/services/clientes-firestore.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  preserveWhitespaces: true
})
export class CadastrarComponent implements OnInit {

  hide = true;
  clientes: ICliente[] = [];

  idCliente = '';
  formulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    // cpf: new FormControl('', [Validators.required,Validators.minLength(11), Validators.maxLength(11)]),
    cpf: new FormControl(''),
    dataDeNascimento: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.min(6)]),
    imagem: new FormControl('')
  })
  email: any;

  constructor(
   // private clienteService: ClientesService, 
    private clienteFirestore: ClientesFirestoreService,
    private alertaService: AlertasService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    inserindo = true;
    nomeBotao = 'Inserir';
  
  ngOnInit() {
      this.clienteFirestore.listar().subscribe(
        dados => {this.clientes = dados; console.log(dados);
      });

     
      this.route.snapshot.paramMap.get('id');
      if (this.idCliente) {
        this.clienteFirestore.pesquisarPorId(this.idCliente).subscribe((cliente: ICliente) => {
          this.formulario.setValue({
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf, // tornar imutavel
            dataDeNascimento: cliente.dataDeNascimento, // tornar imutavel 
            senha: cliente.senha,
            imagem: cliente.imagem
          });
        }, (error) => {
          console.log(error);
        });
      }
      
  }

  
  enviar() {
    const cliente: ICliente = this.formulario.value as ICliente;

    // JSON SERVER
    // if (this.idCliente) {
    //   cliente.id = this.idCliente;
    //   this.clienteService.atualizar(cliente).subscribe(() => {
    //     this.alertaService.alertaSucesso('Cliente atualizado com sucesso');
    //     this.router.navigate(['/listar']);
    //   })
    //   return;
    // }
    
    if (this.idCliente) {
      cliente.id = this.idCliente;
      this.clienteFirestore.atualizar(cliente).subscribe(() => {
        console.log(this.idCliente);
        this.alertaService.alertaSucesso('Editado com sucesso :)');
        this.router.navigate(['/clientes']);
      })
      return;
    }

    this.clienteFirestore.inserir(cliente).subscribe(() => {
      this.alertaService.alertaSucesso('Cliente cadastrado com sucesso');
      this.router.navigate(['/listar']);
    }, (error) => {
      console.log(error);
    }); 

  }

  // inserirOuAtualizarUsuario() {
  //   if (this.inserindo) {
  //     this.usuarioService.inserir(this.usuarioAtual).subscribe(
  //       usuarioInserido => this.mensagemService.info('Usuário cadastrado com sucesso!')
  //     );
  //     this.usuarioAtual = new Usuario('');
  //   } else {
  //     this.usuarioService.atualizar(this.usuarioAtual).subscribe(
  //       usuarioAtualizado => this.mensagemService.erro('Usuário atualizado com sucesso!')
  //     )
  //   }
  // }
}
