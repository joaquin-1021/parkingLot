import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,MatButtonModule,MatTabsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links = ['home', 'estadisticas'];
  activeLink = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects.replace('/', '');
      }
    });
  }
}

