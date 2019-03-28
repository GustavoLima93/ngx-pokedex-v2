import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemons: Pokemon[]
  @Output() pokemon = new EventEmitter<Pokemon>()

  constructor() { }

  ngOnInit() {
  }

  pokemonDetails(pokemon: Pokemon) {
    return this.pokemon.emit(pokemon);
  }

}
