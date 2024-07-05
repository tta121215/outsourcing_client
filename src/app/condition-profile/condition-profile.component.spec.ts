import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionProfileComponent } from './condition-profile.component';

describe('ConditionProfileComponent', () => {
  let component: ConditionProfileComponent;
  let fixture: ComponentFixture<ConditionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
