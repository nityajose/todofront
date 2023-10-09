import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltodoComponent } from './viewalltodo.component';

describe('ViewalltodoComponent', () => {
  let component: ViewalltodoComponent;
  let fixture: ComponentFixture<ViewalltodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalltodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewalltodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
