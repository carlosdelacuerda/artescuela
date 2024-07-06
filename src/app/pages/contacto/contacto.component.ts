import { Component } from '@angular/core';
import { MapComponent } from '../../components/contacto/map/map.component';
import { TextoComponent } from '../../components/contacto/texto/texto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MapComponent, TextoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
