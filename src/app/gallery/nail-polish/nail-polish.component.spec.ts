import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailPolishComponent } from './nail-polish.component';

describe('NailPolishComponent', () => {
  let component: NailPolishComponent;
  let fixture: ComponentFixture<NailPolishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailPolishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailPolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
