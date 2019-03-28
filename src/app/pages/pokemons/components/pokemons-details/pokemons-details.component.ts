import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from './../../../../models/pokemon.model';

@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.scss']
})
export class PokemonsDetailsComponent implements OnInit {

  @Input() pokemon: Pokemon

  constructor() { }

  ngOnInit() {
  }

}
