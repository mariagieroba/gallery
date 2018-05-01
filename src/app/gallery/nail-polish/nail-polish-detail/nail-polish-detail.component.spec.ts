import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailPolishDetailComponent } from './nail-polish-detail.component';

describe('NailPolishDetailComponent', () => {
  let component: NailPolishDetailComponent;
  let fixture: ComponentFixture<NailPolishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailPolishDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailPolishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
