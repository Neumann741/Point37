import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./site/header/header";
import { MainPage } from './site/main-page/main-page';

@Component({
  imports: [RouterOutlet, Header, MainPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('trabalho-ecommerce');
}
