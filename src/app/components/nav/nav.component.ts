import { Component, OnInit } from '@angular/core';

import { PokemonsService } from './../../pages/pokemons/services/pokemons.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public pokemonName: string

  constructor(
    private pokemonService: PokemonsService
  ) { }

  ngOnInit() {
  }

  searchPokemon() {    
    this.pokemonService.setFiltro(this.pokemonName);
  }
}
