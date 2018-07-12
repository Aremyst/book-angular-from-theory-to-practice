import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeObservableComponent } from './async-pipe-observable.component';

describe('AsyncPipeObservableComponent', () => {
  let component: AsyncPipeObservableComponent;
  let fixture: ComponentFixture<AsyncPipeObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
