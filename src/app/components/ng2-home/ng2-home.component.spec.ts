import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2HomeComponent } from './ng2-home.component';

describe('Ng2HomeComponent', () => {
  let component: Ng2HomeComponent;
  let fixture: ComponentFixture<Ng2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
