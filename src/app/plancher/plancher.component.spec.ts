import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancherComponent } from './plancher.component';

describe('PlancherComponent', () => {
  let component: PlancherComponent;
  let fixture: ComponentFixture<PlancherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlancherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlancherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
