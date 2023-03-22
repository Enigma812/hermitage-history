import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPageComponent } from './interior-page.component';

describe('ChoiceInteriorComponent', () => {
  let component: InteriorPageComponent;
  let fixture: ComponentFixture<InteriorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorPageComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InteriorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
