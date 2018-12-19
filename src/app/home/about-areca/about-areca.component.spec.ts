import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArecaComponent } from './about-areca.component';

describe('AboutArecaComponent', () => {
  let component: AboutArecaComponent;
  let fixture: ComponentFixture<AboutArecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutArecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutArecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
