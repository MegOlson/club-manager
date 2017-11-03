import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungGrowersComponent } from './young-growers.component';

describe('YoungGrowersComponent', () => {
  let component: YoungGrowersComponent;
  let fixture: ComponentFixture<YoungGrowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungGrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungGrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
