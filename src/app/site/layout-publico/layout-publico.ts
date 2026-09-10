import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

@Component({
  imports: [Footer, RouterOutlet, Header],
  selector: 'app-layout-publico',
  styleUrl: './layout-publico.css',
  templateUrl: './layout-publico.html',
})
export class LayoutPublico {}
