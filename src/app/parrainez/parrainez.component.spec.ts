import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrainezComponent } from './parrainez.component';

describe('ParrainezComponent', () => {
  let component: ParrainezComponent;
  let fixture: ComponentFixture<ParrainezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrainezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrainezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
