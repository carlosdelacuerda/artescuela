import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Artescuela Escuela de Baile en Pinto';

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
