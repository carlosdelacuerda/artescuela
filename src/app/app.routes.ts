import { Routes } from '@angular/router';
import { MainLayerComponent } from './layers/main-layer/main-layer.component';
import { HomeComponent } from './pages/home/home.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { BailesComponent } from './pages/bailes/bailes.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '',
    component: MainLayerComponent,
    children: [
        {
          path: 'home', 
          title: 'Home Artescuela Escuela de Baile en Pinto',
          component: HomeComponent,
        },
        {
          path: 'conocenos/:section', 
          title: 'Conócenos Artescuela Escuela de Baile en Pinto',
          component: ConocenosComponent,
        },
        {
          path: 'bailes', 
          title: 'Bailes Artescuela Escuela de Baile en Pinto',
          component: BailesComponent,
        },
        {
          path: 'horarios', 
          title: 'Horarios Artescuela Escuela de Baile en Pinto',
          component: HorariosComponent,
        },
        {
          path: 'tarifas', 
          title: 'Tarifas Artescuela Escuela de Baile en Pinto',
          component: TarifasComponent,
        },
        {
          path: 'contacto', 
          title: 'Contacto Artescuela Escuela de Baile en Pinto',
          component: ContactoComponent,
        },
        {
          path: '', 
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: '**', 
          redirectTo: 'home',
          pathMatch: 'full'
        },
    ]
    },

];
