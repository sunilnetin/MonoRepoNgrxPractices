import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosStateLib } from './todos-state-lib';

describe('TodosStateLib', () => {
  let component: TodosStateLib;
  let fixture: ComponentFixture<TodosStateLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosStateLib],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosStateLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
