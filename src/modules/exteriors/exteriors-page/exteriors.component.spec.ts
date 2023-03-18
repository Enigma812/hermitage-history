import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorsPageComponent } from './exteriors.component';

describe('ExteriorsPageComponent', () => {
  let component: ExteriorsPageComponent;
  let fixture: ComponentFixture<ExteriorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExteriorsPageComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExteriorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
