import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorifugeComponent } from './calorifuge.component';

describe('CalorifugeComponent', () => {
  let component: CalorifugeComponent;
  let fixture: ComponentFixture<CalorifugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorifugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorifugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
