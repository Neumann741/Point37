import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";
import { Carrossel } from "../carrossel/carrossel";
import { Header } from "../header/header";

@Component({
  imports: [Footer, RouterOutlet, Carrossel, Header],
  selector: 'app-layout-publico',
  styleUrl: './layout-publico.css',
  templateUrl: './layout-publico.html',
})
export class LayoutPublico {}
