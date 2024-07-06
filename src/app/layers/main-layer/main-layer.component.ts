import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { HeaderComponent } from '../../components/shared/header/header.component';

@Component({
  selector: 'app-main-layer',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './main-layer.component.html',
  styleUrl: './main-layer.component.scss'
})
export class MainLayerComponent {

}
