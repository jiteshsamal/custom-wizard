import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWizardComponent } from './main-wizard.component';

describe('MainWizardComponent', () => {
  let component: MainWizardComponent;
  let fixture: ComponentFixture<MainWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
