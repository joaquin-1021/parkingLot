import { Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'estadisticas', component: EstadisticasComponent}
];
