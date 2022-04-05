import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrainageComponent } from './parrainage.component';

describe('ParrainageComponent', () => {
  let component: ParrainageComponent;
  let fixture: ComponentFixture<ParrainageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrainageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
