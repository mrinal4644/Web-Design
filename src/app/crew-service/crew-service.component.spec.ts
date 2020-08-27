import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewServiceComponent } from './crew-service.component';

describe('CrewServiceComponent', () => {
  let component: CrewServiceComponent;
  let fixture: ComponentFixture<CrewServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
