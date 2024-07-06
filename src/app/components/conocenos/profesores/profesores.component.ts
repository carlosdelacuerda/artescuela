import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { profesorInterface } from '../../../core/interfaces';
import { profesoresList } from './profesores.config';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.scss'
})
export class ProfesoresComponent implements OnInit {
  profesores: profesorInterface[] = [];

  ngOnInit(): void {
    let idProfesor = 0;
    profesoresList.forEach((profesor) => {
      idProfesor++;
      profesor.id = idProfesor;
      this.profesores.push(profesor)
    })
  }
}
