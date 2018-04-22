import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailPolishItemComponent } from './nail-polish-item.component';

describe('NailPolishItemComponent', () => {
  let component: NailPolishItemComponent;
  let fixture: ComponentFixture<NailPolishItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailPolishItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailPolishItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
