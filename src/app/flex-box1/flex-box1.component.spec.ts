import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBox1Component } from './flex-box1.component';

describe('FlexBox1Component', () => {
  let component: FlexBox1Component;
  let fixture: ComponentFixture<FlexBox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
