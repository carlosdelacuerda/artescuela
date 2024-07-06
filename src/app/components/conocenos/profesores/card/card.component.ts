import { Component, Input, OnInit } from '@angular/core';
import { profesorInterface } from '../../../../core/interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input('profesor')porfesor: profesorInterface = {
    img: '',
    nombre: '',
    clases: [],
    bio: '',
  };
  selectedProfesor: profesorInterface = {
    img: '',
    nombre: '',
    clases: [],
    bio: '',
  };

  ngOnInit(): void {
    this.selectedProfesor = this.porfesor
  }

}
