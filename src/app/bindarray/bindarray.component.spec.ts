import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindarrayComponent } from './bindarray.component';

describe('BindarrayComponent', () => {
  let component: BindarrayComponent;
  let fixture: ComponentFixture<BindarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
