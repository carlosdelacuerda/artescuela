import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocenosTempComponent } from './conocenos-temp.component';

describe('ConocenosTempComponent', () => {
  let component: ConocenosTempComponent;
  let fixture: ComponentFixture<ConocenosTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConocenosTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConocenosTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
