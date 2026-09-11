import { Component, signal } from '@angular/core';
import { Header } from "../header/header";
import { FormsModule } from '@angular/forms';
import { Credencial } from './credencial';
import { Router } from '@angular/router';

@Component({
  imports: [Header, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

protected infoModel = signal<Credencial> ({
  email: '',
  senha: ''
})

    constructor(private router  : Router) {}

  entrar() {

 const dados = this.infoModel()

 if (dados.email === 'arthur@gmail.com' && dados.senha === '123'){
     this.router.navigate(['/pag-adm'])
 }

  }   
}
