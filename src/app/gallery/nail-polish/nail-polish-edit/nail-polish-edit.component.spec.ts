import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailPolishEditComponent } from './nail-polish-edit.component';

describe('NailPolishEditComponent', () => {
  let component: NailPolishEditComponent;
  let fixture: ComponentFixture<NailPolishEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailPolishEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailPolishEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
