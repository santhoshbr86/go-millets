import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeCartComponent } from './shope-cart.component';

describe('ShopeCartComponent', () => {
  let component: ShopeCartComponent;
  let fixture: ComponentFixture<ShopeCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
