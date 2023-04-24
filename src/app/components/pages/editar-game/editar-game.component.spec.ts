import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGameComponent } from './editar-game.component';

describe('EditarGameComponent', () => {
  let component: EditarGameComponent;
  let fixture: ComponentFixture<EditarGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
