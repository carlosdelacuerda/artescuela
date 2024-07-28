import { Component } from '@angular/core';
import { SchoolGalleryComponent } from '../../components/fotos/school-gallery/school-gallery.component';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [SchoolGalleryComponent],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent {

}
