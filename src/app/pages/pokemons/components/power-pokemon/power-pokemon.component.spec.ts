import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPokemonComponent } from './power-pokemon.component';

describe('PowerPokemonComponent', () => {
  let component: PowerPokemonComponent;
  let fixture: ComponentFixture<PowerPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
