import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrePosterComponent } from './genre-poster.component';

describe('GenrePosterComponent', () => {
  let component: GenrePosterComponent;
  let fixture: ComponentFixture<GenrePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrePosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenrePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
