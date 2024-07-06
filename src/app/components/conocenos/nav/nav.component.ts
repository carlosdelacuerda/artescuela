import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public route = inject(ActivatedRoute)
  @Input('section') section?: any;
  activeSection: string = '';

  constructor(public router: Router){} 

  ngOnInit(): void {
    this.route.params.subscribe(({section}) => {
      this.activeSection = section;
      })
    };

  click (param:string) {
    this.router.navigate(['conocenos/' + param]);
  }

}
