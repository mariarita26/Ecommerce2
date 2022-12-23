import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.min(6)])
  })  

  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.formulario.value);

    // se os dados do formulário existirem no banco o usuário consegue fazer o login
    if (this.formulario.value.email && this.formulario.value.senha  ) {
      
    }
  }
}
