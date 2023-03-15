import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorsComponent } from './exteriors.component';

describe('ExteriorsComponent', () => {
  let component: ExteriorsComponent;
  let fixture: ComponentFixture<ExteriorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExteriorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExteriorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
