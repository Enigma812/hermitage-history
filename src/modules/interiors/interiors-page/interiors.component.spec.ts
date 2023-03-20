import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorsPageComponent } from './interiors.component';

describe('InteriorsPageComponent', () => {
  let component: InteriorsPageComponent;
  let fixture: ComponentFixture<InteriorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorsPageComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InteriorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
