import { Component, OnInit, TemplateRef, ViewChild, OnChanges } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


import { PokemonsService } from './../../services/pokemons.service';

import { Pokemon } from './../../../../models/pokemon.model';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnChanges {

  @ViewChild('modal') modal: TemplateRef<BsModalRef>;

  public pokemons: Pokemon[];
  public pokemon: Pokemon;
  public modalRef: BsModalRef;

  public configModal = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  };

  constructor(
    private pokemonsService: PokemonsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.pokemonsService.filtroAtual.subscribe((pokemonName:string) => {
      pokemonName ? this.searchPokemon(pokemonName) : this.getPokemons();
    })
  }

  ngOnChanges() {
    this.pokemonsService.filtroAtual.subscribe((pokemonName:string) => {
      pokemonName ? this.searchPokemon(pokemonName) : this.getPokemons();
    })
  }

  getPokemons() {
    return this.pokemonsService.getAllPokemons().pipe(take(1)).subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    })
  }

  searchPokemon(pokemonName:string) {
    return this.pokemonsService.getFilterPokemons(pokemonName).subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    })
  }

  detailsPokemon(event: Pokemon) {
    this.pokemon = event;
    return this.openModal(this.modal);
  }

  openModal(template: TemplateRef<BsModalRef>) {

    this.modalRef = this.modalService.show(template, this.configModal);

  }

}
