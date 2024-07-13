import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOpenModalComponent } from './button-open-modal.component';

describe('ButtonOpenModalComponent', () => {
  let component: ButtonOpenModalComponent;
  let fixture: ComponentFixture<ButtonOpenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonOpenModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonOpenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
