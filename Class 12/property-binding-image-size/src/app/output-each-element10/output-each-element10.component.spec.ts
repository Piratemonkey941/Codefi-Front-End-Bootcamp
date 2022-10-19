import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEachElement10Component } from './output-each-element10.component';

describe('OutputEachElement10Component', () => {
  let component: OutputEachElement10Component;
  let fixture: ComponentFixture<OutputEachElement10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputEachElement10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEachElement10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
