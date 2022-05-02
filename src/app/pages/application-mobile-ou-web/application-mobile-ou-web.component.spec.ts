import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMobileOuWebComponent } from './application-mobile-ou-web.component';

describe('ApplicationMobileOuWebComponent', () => {
  let component: ApplicationMobileOuWebComponent;
  let fixture: ComponentFixture<ApplicationMobileOuWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationMobileOuWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMobileOuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
