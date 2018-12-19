import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlasticComponent } from './current-plastic.component';

describe('CurrentPlasticComponent', () => {
  let component: CurrentPlasticComponent;
  let fixture: ComponentFixture<CurrentPlasticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPlasticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPlasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
