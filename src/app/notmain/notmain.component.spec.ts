import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotmainComponent } from './notmain.component';

describe('NotmainComponent', () => {
  let component: NotmainComponent;
  let fixture: ComponentFixture<NotmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
