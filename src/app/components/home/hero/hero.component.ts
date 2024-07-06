import { Component } from '@angular/core';
import { HeroImgComponent } from '../hero-img/hero-img.component';
import { HeroTitleComponent } from '../hero-title/hero-title.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroImgComponent, HeroTitleComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
