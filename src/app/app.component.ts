import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavComponent } from "./componentes/nav/nav.component";
import { HeaderComponent } from "./componentes/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuickParking';
}
