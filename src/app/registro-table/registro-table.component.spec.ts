import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTableComponent } from './registro-table.component';

describe('RegistroTableComponent', () => {
  let component: RegistroTableComponent;
  let fixture: ComponentFixture<RegistroTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
