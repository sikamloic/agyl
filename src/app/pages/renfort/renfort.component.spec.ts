import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenfortComponent } from './renfort.component';

describe('RenfortComponent', () => {
  let component: RenfortComponent;
  let fixture: ComponentFixture<RenfortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenfortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
