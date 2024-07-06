import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavComponent } from '../../components/conocenos/nav/nav.component';
import { ProfesoresComponent } from '../../components/conocenos/profesores/profesores.component';
import { EscuelaComponent } from '../../components/conocenos/escuela/escuela.component';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [
    RouterLink,
    NavComponent,
    ProfesoresComponent,
    EscuelaComponent
  ],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.scss'
})
export class ConocenosComponent implements OnInit {

  public route = inject(ActivatedRoute)
  @Input('section') section?: any;
  activeSection: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(({section}) => {
      this.activeSection = section;
      })
    };

    changeSection(e:string) {
      this.activeSection = e;
    }
}


