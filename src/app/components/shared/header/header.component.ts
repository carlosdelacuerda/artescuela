import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() { 
    this.items = [
      {
        label: 'Home',
        routerLink: '/home',
      },
      {
        label: 'Conócenos',
        routerLink: '/conocenos',
      },
 //     {
 //        label: 'Conócenos',
 //        items: [
 //          {
 //              label: 'Profesores',
 //              routerLink: 'conocenos/profesores',
 //          },
 //          {
 //              label: 'La escuela',
 //              routerLink: 'conocenos/escuela'
 //          }
 //      ]
 //      },
  //     {
  //       label: 'Bailes',
  //       routerLink: '/bailes'
  //     },
      {
        label: 'Fotos',
        routerLink: '/fotos'
      },
      {
        label: 'Horarios',
        routerLink: '/horarios'
      },
      {
        label: 'Tarifas',
        routerLink: '/tarifas'
      },
      {
        label: 'Contacto',
        routerLink: '/contacto'
      },
    ]
  }

}
