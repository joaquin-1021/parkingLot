import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { NavComponent } from "../../componentes/nav/nav.component";
import { CardParkingComponent } from "../../componentes/card-parking/card-parking.component";

@Component({
  selector: 'app-home',
  imports: [CardParkingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  iteracion: number=48;
  
  getArray(num: number): number[] {
    return Array.from({ length: num }, (_, i) => i);
  }

}
