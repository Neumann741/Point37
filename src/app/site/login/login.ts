import { Component, signal } from '@angular/core';
import { Header } from "../header/header";
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Header, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';
  mensagem = signal('');

  entrar() {
    this.mensagem.set(`Acesso solicitado para ${this.email}.`);
  }
}
