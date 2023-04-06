import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorsPageComponent } from './floors-page.component';

describe('FloorsPageComponent', () => {
  let component: FloorsPageComponent;
  let fixture: ComponentFixture<FloorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorsPageComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FloorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
